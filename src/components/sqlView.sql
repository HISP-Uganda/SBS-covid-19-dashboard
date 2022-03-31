select 
    sum(dv.value::INTEGER) total 
from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join organisationunit o on(o.organisationunitid  = dv.sourceid)  

where 
    de.uid = '${dx}' 
    and o.path ~ '${parent}' 
    and dv.deleted = false 
group by per;

and p.startdate between '${startdate}' and '${enddate}'
inner join period p using (periodid)


select split_part(path, '/', ${part}) as ou,sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join organisationunit o on(o.organisationunitid  = dv.sourceid)   
inner join period p using (periodid)
where de.uid = '${dx}' and o.path ~ '${parent}' and dv.deleted = false 
and p.startdate between '${startdate}' and '${enddate}'
group by ou;


--inner join organisationunit o on(o.organisationunitid  = dv.sourceid) 

--Database level function to query users
CREATE OR REPLACE FUNCTION reporters_at_school_level(startdate TEXT, enddate TEXT) RETURNS BIGINT AS
$delim$
    DECLARE
        retval BIGINT := 0;
    BEGIN
        SELECT
            COUNT(DISTINCT userinfoid) INTO retval
        FROM usermembership u
        INNER JOIN organisationunit o using(organisationunitid)
        INNER JOIN userinfo using(userinfoid)
        WHERE
            o.hierarchylevel = 7
            AND o.path ~ '${parent}' 
            AND userinfo.created >= startdate::DATE
            AND userinfo.created <= enddate::DATE;
        RETURN retval;
    END;
$delim$ LANGUAGE plpgsql;



-- Schools reporting group by period
SELECT
    to_char(p.startdate::date, 'YYYY-MM-DD') as start_date,
    COUNT(DISTINCT sourceid) AS schools_reporting
FROM datavalue dv
INNER JOIN period p using (periodid)
inner join organisationunit o on(o.organisationunitid  = dv.sourceid)   
WHERE
    dataelementid IN (SELECT dataelementid
        FROM  datasetelement
        WHERE datasetid = (SELECT datasetid FROM dataset WHERE uid ='O3j08JESoRK'))
    -- and p.startdate between '2022-02-08' and '2022-02-14' 
       and o.path ~ '${parent}'
     AND p.startdate  BETWEEN CURRENT_DATE - 13 AND CURRENT_DATE
group by start_date;

SELECT SUM (dv.value::int) FROM datavalue dv WHERE dv.organisationunitid in (
    SELECT organisationunitid FROM organisationunitgroupmember ougm 
    WHERE ougm.organisationunitid in (
        SELECT organisationunitid FROM organisationunitgroup
        WHERE uid in ("x", "y"
    )
    )
)

-- Schools reporting - one
SELECT COUNT(DISTINCT sourceid) AS reporting_schools
 FROM datavalue dv
inner join period p using (periodid)
inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
WHERE dataelementid IN (SELECT dataelementid FROM  datasetelement WHERE datasetid = (SELECT datasetid FROM dataset WHERE uid ='O3j08JESoRK')) and o.path ~ '${parent}'  
and p.startdate between '${startdate}' and '${enddate}'
AND o.ou_groups ~ '${ougroups}';



-- schools reporting group by periodid -

SELECT
    to_char(p.startdate::date, 'YYYY-MM-DD') as start_date,
    COUNT(DISTINCT sourceid) AS schools_reporting
FROM datavalue dv
INNER JOIN period p using (periodid)
-- inner join ous_with_groups_mv o on(o.organisationunitid  = dv.sourceid) 
inner join organisationunit o on(o.organisationunitid  = dv.sourceid)  
WHERE
    dataelementid IN (SELECT dataelementid
        FROM  datasetelement
        WHERE datasetid = (SELECT datasetid FROM dataset WHERE uid ='O3j08JESoRK'))
    -- and p.startdate between '2022-02-08' and '2022-02-14' 
       and o.path ~ '${parent}'
     -- AND o.ou_groups ~ '${ougroups}'
     AND p.startdate  BETWEEN CURRENT_DATE - 13 AND CURRENT_DATE
group by start_date;








SELECT
    to_char(p.startdate::date, 'YYYY-MM-DD') as start_date,
    COUNT(DISTINCT sourceid) AS schools_reporting
FROM datavalue dv
INNER JOIN period p using (periodid)
INNER join organisationunit o on(o.organisationunitid  = dv.sourceid)  
WHERE
    dataelementid IN (SELECT dataelementid
        FROM  datasetelement
        WHERE datasetid = (SELECT datasetid FROM dataset WHERE uid ='O3j08JESoRK'))
       and o.path ~ '${parent}'
     AND p.startdate  BETWEEN CURRENT_DATE - 13 AND CURRENT_DATE
group by start_date;