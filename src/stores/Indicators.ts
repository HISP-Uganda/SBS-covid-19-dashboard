import { Indicator } from "../interfaces";

type func = (...args: any[]) => Indicator;

export const mainDashboard: { [key: string]: func } = {
  
  percentage_schools_reporting: (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "wcQpj3qe5a0",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "Y3I1lzy1tTJ",
        parameters: { 
            dx: "HwcoAIH8yOC" },
            parent, 
            ougroups
      },
    };
  },
  isolated_students: (parent, startdate, enddate, ougroups)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "rrvYimAHvV7", startdate, enddate, ougroups},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "l2CJ4fYySx9", startdate, enddate, ougroups },
      }
    }
  },
  percentage_referred_for_testing: (parent, startdate, enddate, ougroups)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "HwcoAIH8yOC", startdate, enddate, ougroups},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "l2CJ4fYySx9", startdate, enddate, ougroups},
      }
    }
  },
  percentage_with_symptoms: (parent, startdate, enddate, ougroups)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "l2CJ4fYySx9", startdate, enddate, ougroups},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "PEn6nKhtnGg", startdate, enddate, ougroups },
      }
    }
  },
  isolated_at_school_symptoms: (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "rrvYimAHvV7",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "Y3I1lzy1tTJ",
        parameters: { 
            dx: "l2CJ4fYySx9" },
            parent, startdate, enddate, ougroups
      },
    };
  },

  total_schools : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "wcQpj3qe5a0",
        parameters: { parent, startdate, enddate, ougroups },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  schools_reporting : (part, parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "gclV1q6K1yJ",
        parameters: { 
          part,
          parent, 
          startdate, 
          enddate,
          ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  schools_reporting1 : ( parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "gclV1q6K1yJ",
        parameters: { 
          parent, 
          startdate, 
          enddate,
          ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  no_referred_testing : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "HwcoAIH8yOC",
          parent,startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  no_screened : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "PEn6nKhtnGg",
          parent, startdate, enddate, ougroups,
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  screened_with_covid_symptoms : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "l2CJ4fYySx9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  withSymptoms : (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "tqzoYKhsro2",
        parameters: {
          dx: "l2CJ4fYySx9",
          parent, part, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  tested_covid19_positive : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  total_reported_positive: (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "lsP2X9I14km",
        parameters: {
          dx: "mGk4R6i1tz9",
          part,
          parent,startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  total_schools_registered: (parent, ougroups) => {
    return {
      numerator: {
        sqlView: "uw6OMvjHWtB",
        parameters: {
          parent, ougroups
        },
      }, 
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  totalSchoolsRegistered: (part, parent, ougroups) => {
    return {
      numerator: {
        sqlView: "TyxyU9erhwx",  
        parameters: {
          part, parent, ougroups
        },
      }, 
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
      
    };
    
  },
  managed_from_school : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "oC2I44e31Pu",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  number_tested_positive : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_isolated_at_school : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "rrvYimAHvV7",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_vaccinated : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "BYgBxd5snmS",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_with_high_temperature : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "SQmXbWlj3yD",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_with_sore_throat_cough : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "v44UNoaMdFD",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },

  percentage_in_schoolbased_care: (parent, ougroups)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          parent,
          dx: "oC2I44e31Pu", 
          ougroups},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "mGk4R6i1tz9" },
      }
    }
  },
  per_referred_for_testing: (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "vYRnUFC53DK",
        parameters: {
          dx: "HwcoAIH8yOC",
          parent,startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, ougroups, 
        dx: "l2CJ4fYySx9" },
      },
    };
  },
  per_tested_positive_of_referred_for_testing: (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "vYRnUFC53DK",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, ougroups,
        dx: "HwcoAIH8yOC" },
      },
    };
  },

  screened_events: (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "lsP2X9I14km",
        parameters: {
          dx: "PEn6nKhtnGg",
          part,
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  screened_with_covid_symptoms_map : (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "lsP2X9I14km",
        parameters: {
          dx: "l2CJ4fYySx9",
          parent,
          part , startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  cumulative_positive : (parent, startdate, enddate, ougroups) => { 
    return {
      numerator: {
        sqlView: "ksZ8C94batE",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },

  cumulativePositiveMap : (parent, part, startdate, enddate, ougroups) => { 
    return {
      numerator: {
        sqlView: "A5N5qMPEWXH",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, part, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_isolated_school: (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "N3JQAd7YW6g", 
        parameters: {
          dx: "rrvYimAHvV7",
          parent,
          part , startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  number_with_symptoms_bar: (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "N3JQAd7YW6g", 
        parameters: {
          dx: "rrvYimAHvV7",
          parent,
          part , startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },

  referred_for_testing_tested_positive: (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "JeJ4S1cIidZ", 
        parameters: {
          dx: "mGk4R6i1tz9",
          parent,
          part, startdate, enddate, ougroups
        },
      },
      denominator: {
        
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },

  report_percentage: (part, parent , startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "gclV1q6K1yJ",
        parameters: { part, parent, startdate, enddate, ougroups},
      },
      denominator: {
        sqlView: "nUudONuOHVi",
        parameters: { parent, ougroups},
      },
    };
  },
  reportPercentage: (parent , startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "gclV1q6K1yJ",
        parameters: {parent, startdate, enddate, ougroups},
      },
      denominator: {
        sqlView: "nUudONuOHVi",
        parameters: { parent, ougroups},
      },
    };
  },

  per_positives_in_school_based_care: (parent, part, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "N3JQAd7YW6g", 
        parameters: {
          dx: "l2CJ4fYySx9",
          parent,
          part, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: {
          dx: "PEn6nKhtnGg",
          parent,
          part, startdate, enddate, ougroups
        },
      },
    };
  },
  reported_positive: (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "DXHyMRvjToM",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  cases_manages_from_school : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "oC2I44e31Pu",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },

  no_isolated_at_school : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "rrvYimAHvV7",
          parent,
          startdate,
          enddate, 
          ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  referred_for_testing : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "HwcoAIH8yOC",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu", 
        parameters: {},
      },
    }
  },
  screened : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "PEn6nKhtnGg",
          parent,startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  
  number_tested_for_covid : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  vaccinated : (parent, startdate, enddate, ougroups) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "BYgBxd5snmS",
          parent, startdate, enddate, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },

  registered_reporters : (part, parent, ougroups) => {
    return {
      numerator: {
        sqlView: "nUudONuOHVi",
        parameters: {
          part,parent, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",  
        parameters: {},
      },
    }
  },
  registered_reporters1 : (parent, ougroups) => {
    return {
      numerator: {
        sqlView: "nUudONuOHVi",
        parameters: {
          parent, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",  
        parameters: {},
      },
    }
  },
//Statistics Table query example
  registeredReportersLeagueTable : (parent,dx,part, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "U84QZkuH3As",
        parameters: {
          parent,dx,part, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",  
        parameters: {},
      },
    }
  },

  users_at_school_level : (part, parent, ougroups) => {
    return {
      numerator: {
        sqlView: "nQcVI19bUv5",
        parameters: {
          part, parent, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",  
        parameters: {},
      },
    }
  },
  UsersAtSchoolLevel : (parent, ougroups) => {
    return {
      numerator: {
        sqlView: "nQcVI19bUv5",
        parameters: {
          parent, ougroups
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",  
        parameters: {},
      },
    }
  },

  reporting_schools : (parent, ougroups) => {
    return {
      numerator: {
        sqlView: "YXED52Olvko",
        parameters: {
           parent,
           ougroups},
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },

  
  
};
