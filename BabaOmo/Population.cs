﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabaOmo
{
    public class Population
    {
        public class Codes
        {
            public const string Sudan = "SDN";
            public const string Nigeria = "NIG";
            public const string BeninRepublic = "BEN";
            public const string Germany = "GER";
            public const string Spain = "SPN";
            public const string Brazil = "BRA";
            public const string China = "CHN";
            public const string Japan = "JAP";
            public const string Thailand = "THA";
            public const string Canada = "CND";
        }

        public class AlleleFrequency
        {
            public string LocusName { get; set; }
            public string PopulationCode { get; set; }
            public string PopulationName { get; set; }
            public decimal AlleleNo { get; set; }
            public decimal Frequency { get; set; }
        }

        public class AlleleFrequencies: List<AlleleFrequency>
        {
            public AlleleFrequencies(string populationCode = null)
            {
                this.AddRange(getData(populationCode));
            }

            private List<AlleleFrequency> getData(string populationCode = null)
            {
                if (populationCode == null)
                {
                    string jsonData = System.IO.File.ReadAllText("Data/All-Data.json");
                    return Newtonsoft.Json.JsonConvert.DeserializeObject<List<AlleleFrequency>>(jsonData);
                }
                else
                {
                    string jsonData = System.IO.File.ReadAllText("Data/" + populationCode + "-Data.json");
                    return Newtonsoft.Json.JsonConvert.DeserializeObject<List<AlleleFrequency>>(Convert.ToString(jsonData));
                }
            }
        }
    }
}
