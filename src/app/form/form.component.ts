import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  constructor(
    private router: Router,
    private formService: FormService) { }


// ngInit()  
  formControl = 1 

  caseId=0
 

  goAhead(){
    this.formControl+=1
  }

  goBack(){
    this.formControl-=1
  }


  goToCases(){
    this.router.navigateByUrl(`/cases/compair/${this.caseId}`)
  }

  errorBlank = false


  form = new FormGroup({
    minPercent: new FormControl(),
    damagedAreaValue: new FormControl(),
    externalDecayValue: new FormControl(),
    cankerLesionValue: new FormControl(),
    fruitSpotsValue: new FormControl(),
    fruitingPodsValue: new FormControl(),
    cropHistValue: new FormControl(),
    fruitingBodiesValue: new FormControl(),
    germinationValue: new FormControl(),
    hailValue: new FormControl(),
    intDiscolorValue: new FormControl(),
    leafMalfValue: new FormControl(),
    leafMildValue: new FormControl(),
    leafShreadValue: new FormControl(),
    leafSpotsHaloValue: new FormControl(), 
    leafSpotsSizeValue: new FormControl(),
    leafSpotsMargValue: new FormControl(),
    leavesValue: new FormControl(),
    lodgingValue: new FormControl(),
    moldGrowthValue: new FormControl(),
    myceliumValue: new FormControl(),
    plantGrowthValue: new FormControl(),
    plantStandValue: new FormControl(),
    precipValue: new FormControl(),
    rootsValue: new FormControl(),
    sclerotiaValue: new FormControl(),
    seedDiscolorValue: new FormControl(),
    severityValue: new FormControl(),
    seedTmtValue: new FormControl(),
    stemValue: new FormControl(),
    stemCankerValue: new FormControl(),
    monthsValue: new FormControl(), 
    tempsValue: new FormControl(),
    
  })

  
  submit(){
    
    let sumValues = this.form.value.damagedAreaValue + this.form.value.externalDecayValue +
    this.form.value.cankerLesionValue + this.form.value.fruitSpotsValue + this.form.value.fruitingPodsValue +
    this.form.value.cropHistValue + this.form.value.fruitingBodiesValue + this.form.value.germinationValue +
    this.form.value.hailValue + this.form.value.intDiscolorValue + this.form.value.leafMalfValue +
    this.form.value.leafMildValue + this.form.value.leafShreadValue + this.form.value.leafSpotsHaloValue +
    this.form.value.leafSpotsMargValue + this.form.value.leafSpotsSizeValue + this.form.value.leavesValue +
    this.form.value.lodgingValue + this.form.value.moldGrowthValue + this.form.value.monthsValue + this.form.value.myceliumValue +
    this.form.value.plantGrowthValue + this.form.value.plantStandValue + this.form.value.precipValue +
    this.form.value.rootsValue + this.form.value.sclerotiaValue + this.form.value.seedDiscolorValue +
    this.form.value.seedTmtValue + this.form.value.severityValue + this.form.value.stemCankerValue + this.form.value.tempsValue +
    this.form.value.stemValue
    if(sumValues < 31 || this.form.value.minPercent === undefined){

      this.errorBlank = true
      setTimeout(() => this.errorBlank = false, 1500)

    }else{
      this.formService.saveForm({
        minPercent: this.form.value.minPercent,
        damagedArea: this.form.value.damagedAreaValue,
        externalDecay: this.form.value.externalDecayValue,
        cankerLesion: this.form.value.cankerLesionValue,
        fruitSpots: this.form.value.fruitSpotsValue,
        cropHist: this.form.value.cropHistValue,
        fruitingBodies: this.form.value.fruitingBodiesValue,
        fruitPods: this.form.value.fruitingPodsValue,
        germination: this.form.value.germinationValue,
        hail: this.form.value.hailValue,
        intDiscolor: this.form.value.intDiscolorValue,
        leafMalf: this.form.value.leafMalfValue,
        leafMild: this.form.value.leafMildValue,
        leafShread: this.form.value.leafShreadValue,
        leafSpotsHalo: this.form.value.leafSpotsHaloValue,
        leafSpotsSize: this.form.value.leafSpotsSizeValue,
        leafSpotsMarg: this.form.value.leafSpotsMargValue,
        leaves: this.form.value.leavesValue,
        lodging: this.form.value.lodgingValue,
        moldGrowth: this.form.value.moldGrowthValue,
        mycelium: this.form.value.myceliumValue,
        plantGrowth: this.form.value.plantGrowthValue,
        plantStand: this.form.value.plantStandValue,
        precip: this.form.value.precipValue,
        roots: this.form.value.rootsValue,
        sclerotia: this.form.value.sclerotiaValue,
        seedDiscolor: this.form.value.seedDiscolorValue,
        severity: this.form.value.severityValue,
        seedTmt: this.form.value.seedTmtValue,
        stem: this.form.value.stemValue,
        stemCanker: this.form.value.stemCankerValue,
        months: this.form.value.monthsValue,
        temps: this.form.value.tempsValue
      }).subscribe((e) => {
        console.log(e)
        this.caseId = e.id!
        console.log(this.caseId)
        this.form.reset()
        this.goToCases()
      });
      

    }
   
  }

  damagedArea = [
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

  externalDecay = [
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

  cankerLesion = [
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

  fruitSpots = [
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

  cropHist = [
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

  fruitingBodies = [
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

  fruitPods = [
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

  germination = [
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

  hail = [
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
    
  intDiscolor = [
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

  leafMalf = [
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

  leafMild = [
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

  leafShread = [
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

  leafSpotsHalo = [
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

  leafSpotsSize = [
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

  leafSpotsMarg = [
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

  leaves = [
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

  lodging = [
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

  moldGrowth = [
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

  mycelium = [
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


  plantGrowth = [
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

  plantStand = [
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

  precip = [
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

  roots = [
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

  sclerotia = [
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


  seedDiscolor = [
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

  severity = [
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

  seedTmt = [
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

  stem = [
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

  
  stemCanker = [
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

  months = [
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
  
  temps = [
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
  


}
