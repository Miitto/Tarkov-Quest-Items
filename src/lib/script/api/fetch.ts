export default async function queryWipe() {
    let res = await fetch("https://api.tarkov.dev/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: `{
         tasks {
           id
           name
           taskImageLink
           trader {
             name
           }
           minPlayerLevel
           objectives {
             id
             description
             optional
             __typename
             ... on TaskObjectiveItem {
               count
               foundInRaid
               dogTagLevel
               minDurability
               maxDurability
               requiredKeys {
                 id
                 name
                 iconLink
               }
               item {
                 id
                 name
                 iconLink
               }
             }
           }
         }
       }`,
        }),
    });
    let data = (await res.json()).data;

    return data;
}
