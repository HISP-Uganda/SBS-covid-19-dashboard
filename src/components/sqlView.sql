SELECT  SUM(dv.value::INTEGER) total
FROM datavalue dv
INNER JOIN dataelement de using
(dataelementid
)
INNER JOIN organisationunit o on
(o.organisationunitid = dv.sourceid
)
WHERE de.uid = '${dx}'
AND o.path ~ '${parent}'
AND dv.deleted = false
GROUP BY  per; AND p.startdate BETWEEN '${startdate}' AND '${enddate}'
INNER JOIN period p USING
(periodid
)
SELECT  split_part(path,'/',${part}) AS ou
       ,SUM(dv.value::INTEGER) total
FROM datavalue dv
INNER JOIN dataelement de using
(dataelementid
)
INNER JOIN organisationunit o on
(o.organisationunitid = dv.sourceid
)
INNER JOIN period p USING
(periodid
)
WHERE de.uid = '${dx}'
AND o.path ~ '${parent}'
AND dv.deleted = false
AND p.startdate BETWEEN '${startdate}' AND '${enddate}'
GROUP BY  ou;
--inner
JOIN organisationunit o on(o.organisationunitid = dv.sourceid)
--Database level function to query users

CREATE OR REPLACE FUNCTION reporters_at_school_level(startdate TEXT, enddate TEXT) RETURNS BIGINT AS $delim$ DECLARE retval BIGINT : = 0; BEGIN

SELECT  COUNT(DISTINCT userinfoid) INTO retval
FROM usermembership u
INNER JOIN organisationunit o using
(organisationunitid
)
INNER JOIN userinfo using
(userinfoid
)
WHERE o.hierarchylevel = 7
AND o.path ~ '${parent}'
AND userinfo.created > = startdate::DATE
AND userinfo.created < = enddate::DATE; RETURN retval; END; $delim$ LANGUAGE plpgsql;
-- Schools reporting
GROUP BY  period
SELECT  to_char(p.startdate::date,'YYYY-MM-DD') AS start_date
       ,COUNT(DISTINCT sourceid)                AS schools_reporting
FROM datavalue dv
INNER JOIN period p USING
(periodid
)
INNER JOIN organisationunit o on
(o.organisationunitid = dv.sourceid
)
WHERE dataelementid IN ( SELECT dataelementid FROM datasetelement WHERE datasetid = ( SELECT datasetid FROM dataset WHERE uid = 'O3j08JESoRK'))
-- AND p.startdate BETWEEN '2022-02-08' AND '2022-02-14'
AND o.path ~ '${parent}'
AND p.startdate BETWEEN CURRENT_DATE - 13 AND CURRENT_DATE
GROUP BY  start_date;

SELECT  SUM (dv.value::int)
FROM datavalue dv
WHERE dv.organisationunitid IN (
SELECT  organisationunitid
FROM organisationunitgroupmember ougm
WHERE ougm.organisationunitid IN (
SELECT  organisationunitid
FROM organisationunitgroup
WHERE uid IN ("x", "y" ) ) )








-- Schools reporting - one
SELECT  COUNT(DISTINCT sourceid) AS reporting_schools
FROM datavalue dv
INNER JOIN period p USING
(periodid
)
INNER JOIN ous_with_groups_mv o on
(o.organisationunitid = dv.sourceid
)
WHERE dataelementid IN (
SELECT  dataelementid
FROM datasetelement
WHERE datasetid = (
SELECT  datasetid
FROM dataset
WHERE uid = 'O3j08JESoRK')) AND o.path ~ '${parent}' AND p.startdate BETWEEN '${startdate}' AND '${enddate}' AND o.ou_groups ~ '${ougroups}';
-- schools reporting
GROUP BY  periodid -
SELECT  to_char(p.startdate::date,'YYYY-MM-DD') AS start_date
       ,COUNT(DISTINCT sourceid)                AS schools_reporting
FROM datavalue dv
INNER JOIN period p USING
(periodid
)
--
INNER JOIN ous_with_groups_mv o on(o.organisationunitid = dv.sourceid)
INNER JOIN organisationunit o on
(o.organisationunitid = dv.sourceid
)
WHERE dataelementid IN (
SELECT  dataelementid
FROM datasetelement
WHERE datasetid = (
SELECT  datasetid
FROM dataset
WHERE uid = 'O3j08JESoRK'))
-- AND p.startdate BETWEEN '2022-02-08' AND '2022-02-14' AND o.path ~ '${parent}'
-- AND o.ou_groups ~ '${ougroups}' AND p.startdate BETWEEN CURRENT_DATE - 13 AND CURRENT_DATE
GROUP BY  start_date;






SELECT  to_char(p.startdate::date,'YYYY-MM-DD') AS start_date
       ,COUNT(DISTINCT sourceid)                AS schools_reporting
FROM datavalue dv
INNER JOIN period p USING
(periodid
)
INNER JOIN organisationunit o on
(o.organisationunitid = dv.sourceid
)
WHERE dataelementid IN (
SELECT  dataelementid
FROM datasetelement
WHERE datasetid = (
SELECT  datasetid
FROM dataset
WHERE uid = 'O3j08JESoRK')) AND o.path ~ '${parent}' AND p.startdate BETWEEN CURRENT_DATE - 13 AND CURRENT_DATE
GROUP BY  start_date;






SELECT  split_part(path,'/',${part}) AS ou
       ,SUM(dv.value::INTEGER) total
FROM datavalue dv
INNER JOIN dataelement de using
(dataelementid
)
INNER JOIN ous_with_groups_mv o on
(o.organisationunitid = dv.sourceid
)
INNER JOIN period p USING
(periodid
)
WHERE de.uid = '${dx}'
AND o.path ~ '${parent}'
AND dv.deleted = false
AND p.startdate BETWEEN '${startdate}' AND '${enddate}'
GROUP BY  ou;







SELECT  de.uid
       ,split_part(path,'/',${part}) AS ou
       ,SUM(dv.value::INTEGER) total
FROM datavalue dv
INNER JOIN dataelement de using
(dataelementid
)
INNER JOIN ous_with_groups_mv o on
(o.organisationunitid = dv.sourceid
)
INNER JOIN period p USING
(periodid
)
WHERE de.uid::text = any (string_to_array('${dx}', '-'))
AND o.path ~ '${parent}'
AND dv.deleted = false
AND p.startdate BETWEEN '${startdate}' AND '${enddate}'
GROUP BY  de.uid
         ,ou;






select split_part(path, '/', ${part}) as ou,sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
inner join period p using (periodid)
where de.uid = '${dx}' and path ~ '${parent}'  and dv.deleted = false
and p.startdate between '2022-01-01' and '${enddate}'
and o.ou_groups ~ '${ougroups}'
group by ou;





-- New Cumulative positives
select split_part(path, '/', ${part}) as ou, sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join period p using (periodid)
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
where de.uid = '${dx}'  and o.path ~ '${parent}' and dv.deleted = false 
and p.startdate between '2022-01-01' and '${enddate}'
AND o.ou_groups ~ '${ougroups}';







SELECT COUNT(DISTINCT sourceid) AS reporting_schools
 FROM datavalue dv
inner join period p using (periodid)
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
WHERE dataelementid IN (SELECT dataelementid FROM  datasetelement WHERE datasetid = (SELECT datasetid FROM dataset WHERE uid ='O3j08JESoRK')) and o.path ~ '${parent}'  
and p.startdate between '${startdate}' and '${enddate}'
AND o.ou_groups ~ '${ougroups}' ;






select de.uid, split_part(path, '/', ${part}) as ou,sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
inner join period p using (periodid)
where de.uid::text = any (string_to_array('${dx}', '-'))  and o.path ~ '${parent}' and dv.deleted = false 
and p.startdate between '${startdate}' and '${enddate}'
group by de.uid,ou;



SELECT split_part(path, '/', ${part}) as ou, COUNT (DISTINCT organisationunitid) AS schools_registered
FROM ous_with_groups_mv 
WHERE hierarchylevel = 7 and path ~ '${parent}' 
AND ou_groups ~ '${ougroups}';



select split_part(path, '/', ${part}) as ou,sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
inner join period p using (periodid)
where de.uid = '${dx}' and o.path ~ '${parent}' and dv.deleted = false 
and p.startdate between '${startdate}' and '${enddate}'
and o.ou_groups ~ '${ougroups}'
group by ou;


select count(distinct o.organisationunitid) from usermembership u 
inner join ous_with_groups_mv o ON(o.organisationunitid  = u.organisationunitid) 
 where o.hierarchylevel= 7 and o.path ~ '${parent}' 
and o.ou_groups ~ '${ougroups}';

--Query by De, group by Ou

select split_part(path, '/', ${part}) as ou,sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
inner join period p using (periodid)
where de.uid = '${dx}' and path ~ '${parent}'  and dv.deleted = false
and p.startdate between '2022-01-01' and '${enddate}'
and o.ou_groups ~ '${ougroups}'
group by ou;


--cumulative positives, group by ou
select split_part(path, '/', ${part}) as ou, sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join period p using (periodid)
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
where de.uid = '${dx}'  and o.path ~ '${parent}' and dv.deleted = false 
and p.startdate between '2022-01-01' and '${enddate}'
AND o.ou_groups ~ '${ougroups} group by ou';



