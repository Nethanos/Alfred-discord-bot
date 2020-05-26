serverInstanceList = ["t3pl-verify01", "t3pl-verify02", "t3pl-verify03", "t3pl-verify04", "t3pl-verify05",
                  "hub-verify01", "hub-verify02", "hub-verify03", "hub-verify04", "hub-verify05",
                  "cash-verify01", "cash-verify02", "cash-verify03", "cash-verify04", "cash-verify05",
                  "tms-verify01", "tms-verify02", "tms-verify03", "tms-verify04", "tms-verify05",
                  "cte-verify01", "cte-verify02", "cte-verify03", "cte-verify04", "cte-verify05",
                  "edi-verify01", "edi-verify02", "edi-verify03", "edi-verify04", "edi-verify05",
                  "ar-verify01", "ar-verify02", "ar-verify03", "ar-verify04", "ar-verify05",
                  "accounts-verify01", "accounts-verify02", "accounts-verify03", "accounts-verify04", "accounts-verify05",                  
                ]


serverNameList = ["t3pl", "hub", "cash", "cte", "tms", "ar", "accounts", "edi"];                  
                  
module.exports = {serverInstanceList, serverNameList};