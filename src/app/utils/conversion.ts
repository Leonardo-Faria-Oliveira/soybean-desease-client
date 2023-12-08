import { routes } from "../app-routing.module";
import { FormComponent } from "../form/form.component";
import { FormService } from "../form/form.service";


export function convertProperty(property: string){
    console.log(property)

    // FormComponent f = new FormComponent(ro
    
    switch(property){

        case "damagedArea":{
            return "Área danificada"
            // break;
        };
        case "externalDecay":{
            return "Decaimento externo"
            break;
        };
        case "cankerLesion":{
            return "Lesão de cancro"
            break;
        };
        case "fruitSpots":{
            return "Mancha nas frutas"
            break;
        };
        case "cropHist":{
            return "Historico de corte"
            break;
        };
        case "fruitingBodies":{
            return "Corpo frutífero"
            break;
        };
        case "fruitPods":{
            return "Vagens de frutas"
            break;
        };
        case "germination":{
            return "Germinação"
            break;
        };
        case "hail":{
            return "Granizo"
            break;
        };
        case "intDiscolor":{
            return "Coloração interna"
            break;
        };
        case "leafMalf":{
            return "Malva na folha"
            break;
        };
        case "leafMild":{
            return "Folha suave"
            break;
        };
        case "leafShread":{
            return "Pedaço de folha"
            break;
        };
        case "leafSpotsHalo":{
            return "Halo nas manchas da folha"
            break;
        };
        case "leafSpotsSize":{
            return "Tamanho das manchas"
            break;
        };
        case "leafSpotsMarg":{
            return "Marg nas manchas"
            break;
        };
        case "leaves":{
            return "Folhas"
            break;
        };
        case "lodging":{
            return "Alojamento"
            break;
        };
        case "moldGrowth":{
            return "Crescimento de mofo"
            break;
        };
        case "mycelium":{
            return "Micélio"
            break;
        };
        case "plantGrowth":{
            return "Crescimento da planta"
            break;
        };
        case "plantStand":{
            return "Firmeza das plantas"
            break;
        };
        case "precip":{
            return "Precipitação"
            break;
        };
        case "roots":{
            return "Raízes"
            break;
        };
        case "sclerotia":{
            return "Esclerocio"
            break;
        };
        case "seedDiscolor":{
            return "Coloração da semente"
            break;
        };
        case "severity":{
            return "Gravidade"
            break;
        };
        case "seedTmt":{
            return "Semente Tmt"
            break;
        };
        case "stem":{
            return "Tronco"
            break;
        };
        case "stemCanker":{
            return "Cancro no tronco"
            break;
        };
        case "months":{
            return "Mês"
            break;
        };
        case "temps":{
            return "Temperatura"
            break;
        };
        default : {
            return " nothing"
        }



    }
}

export function convertValues(property:string, value:string){

    let damagedArea = [
        {
          name: "Áreas baixas",
          value: 1
        },
        {
          name: "Espalhado",
          value: 2
        },
        {
          name: "Campo inteiro",
          value: 3
        },
        {
          name: "Áreas superiores",
          value: 4
        },
        {
          name: "Desconhecido",
          value: 0
        }
    ]
  
    let externalDecay = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Firme e seco",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let cankerLesion = [
      {
        name: "Bronzeado",
        value: 1
      },
      {
        name: "Marrom",
        value: 2
      },
      {
        name: "Marrom escuro",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let fruitSpots = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Colorido",
        value: 2
      },
      {
        name: "Marrom com manchas pretas",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let cropHist = [
      {
        name: "Diferente no primeiro ano",
        value: 1
      },
      {
        name: "Mesmo no primeiro ano",
        value: 2
      },
      {
        name: "Mesmo dos ultimos 2 anos",
        value: 3
      },
      {
        name: "Mesmo dos ultimos 7 anos",
        value: 8
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let fruitingBodies = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Presente",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let fruitPods = [
      {
        name: "Normal",
        value: 1
      },
      {
        name: "Poucos presentes",
        value: 2
      },
      {
        name: "Doente",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let germination = [
      {
        name: "menos que 80%",
        value: 1
      },
      {
        name: "80% - 89%",
        value: 2
      },
      {
        name: "90% - 100%",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let hail = [
      {
        name: "Não",
        value: 1
      },
      {
        name: "Sim",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
      
    let intDiscolor = [
      {
        name: "Nenhuma",
        value: 1
      },
      {
        name: "Marrom",
        value: 2
      },
      {
        name: "Preto",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let leafMalf = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Presente",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let leafMild = [
      {
        name: "Nenhuma",
        value: 1
      },
      {
        name: "Baixa",
        value: 2
      },
      {
        name: "Alta",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let leafShread = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Presente",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let leafSpotsHalo = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Sem areola amarela",
        value: 2
      },
      {
        name: "Areola amarela",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let leafSpotsSize = [
      {
        name: "Menor que 1/8",
        value: 1
      },
      {
        name: "Maior 1/8",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let leafSpotsMarg = [
      {
        name: "Sem marg",
        value: 1
      },
      {
        name: "Com marg",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let leaves = [
      {
        name: "Anormal",
        value: 1
      },
      {
        name: "Normal",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let lodging = [
      {
        name: "Não",
        value: 1
      },
      {
        name: "Sim",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let moldGrowth = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Presente",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let mycelium = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Presente",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
  
    let plantGrowth = [
      {
        name: "Anormal",
        value: 1
      },
      {
        name: "Normal",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let plantStand = [
      {
        name: "Normal",
        value: 1
      },
      {
        name: "Menos que o normal",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let precip = [
      {
        name: "Normal",
        value: 1
      },
      {
        name: "Menos que o normal",
        value: 2
      },
      {
        name: "Maior que o normal",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let roots = [
      {
        name: "Normal",
        value: 1
      },
      {
        name: "Podre",
        value: 2
      },
      {
        name: "Galhos",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let sclerotia = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Presente",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
  
    let seedDiscolor = [
      {
        name: "Ausente",
        value: 1
      },
      {
        name: "Presente",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let severity = [
      {
        name: "Menor",
        value: 1
      },
      {
        name: "Severo",
        value: 2
      },
      {
        name: "Muito severo",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let seedTmt = [
      {
        name: "Nenhum",
        value: 1
      },
      {
        name: "Outros",
        value: 2
      },
      {
        name: "Fungicidade",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let stem = [
      {
        name: "Anormal",
        value: 1
      },
      {
        name: "Normal",
        value: 2
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    
    let stemCanker = [
      {
        name: "Acima do segundo",
        value: 1
      },
      {
        name: "Ausente",
        value: 2
      },
      {
        name: "Abaixo do solo",
        value: 3
      },
      {
        name: "Acima do solo",
        value: 4
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
  
    let months = [
      {
        name: "Janeiro",
        value: 1
      },
      {
        name: "Fevereiro",
        value: 2
      },
      {
        name: "Março",
        value: 3
      },
      {
        name: "Abril",
        value: 4
      },
      {
        name: "Maio",
        value: 5
      },
      {
        name: "Junho",
        value: 6
      },
      {
        name: "Julho",
        value: 7
      },
      {
        name: "Agosto",
        value: 8
      },
      {
        name: "Setembro",
        value: 9
      },
      {
        name: "Outubro",
        value: 10
      },
      {
        name: "Novembro",
        value: 11
      },
      {
        name: "Dezembro",
        value: 12
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]
    
    let temps = [
      {
        name: "Normal",
        value: 1
      },
      {
        name: "Mais quente que o normal",
        value: 2
      },
      {
        name: "Mais frio que o normal",
        value: 3
      },
      {
        name: "Desconhecido",
        value: 0
      }
    ]

    switch(property){

        case "damagedArea":{
            return damagedArea[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name
        };
        case "externalDecay":{
            return externalDecay[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "cankerLesion":{
            return cankerLesion[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "fruitSpots":{
            return fruitSpots[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "cropHist":{
            return cropHist[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "fruitingBodies":{
            return fruitingBodies[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "fruitPods":{
            return fruitPods[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "germination":{
            return germination[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "hail":{
            return hail[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "intDiscolor":{
            return intDiscolor[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "leafMalf":{
            return leafMalf[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "leafMild":{
            return leafMild[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "leafShread":{
            return leafShread[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "leafSpotsHalo":{
            return leafSpotsHalo[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "leafSpotsSize":{
            return leafSpotsSize[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "leafSpotsMarg":{
            return leafSpotsMarg[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "leaves":{
            return leaves[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "lodging":{
            return lodging[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "moldGrowth":{
            return moldGrowth[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "mycelium":{
            return mycelium[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "plantGrowth":{
            return plantGrowth[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "plantStand":{
            return plantStand[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "precip":{
            return precip[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "roots":{
            return roots[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "sclerotia":{
            return sclerotia[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "seedDiscolor":{
            return seedDiscolor[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "severity":{
            return severity[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "seedTmt":{
            return seedTmt[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "stem":{
            return stem[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "stemCanker":{
            return stemCanker[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value)].name

        };
        case "months":{
            return months[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        case "temps":{
            return temps[parseInt(value) === 3 ? parseInt(value)-1 : parseInt(value) ].name

        };
        default : {
            return "Desconhecido"

        }
    }
}