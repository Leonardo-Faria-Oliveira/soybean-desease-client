import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CasesService } from './cases.service';
import {convertProperty, convertValues} from '../utils/conversion';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor(
    private caseService: CasesService,
    private activatedRoute : ActivatedRoute,
    private router: Router
    ) { }


  cases = new Array<any>()

  dataFilled =  new Array<any>()

  caseId = this.activatedRoute.snapshot.paramMap.get("id")

  ngOnInit(): void {
    this.caseService.getDataFilled(this.caseId!).subscribe((e)=>{
      let data = e

      for(let property in data){
        // let aux = [property]
        if(property != "id" && property != "deseaseName"){
          this.dataFilled.push({
            data: convertProperty(property),
            value: convertValues(property, data[property])
          })
        }
      }

      // console.log(this.dataFilled);
    })


    this.caseService.getCases(this.caseId!).subscribe((e)=>{
      let data = e

      for(let property in data){
        // let aux = [property]
  
        this.cases.push({
          percent: parseFloat((data[property].globalSimilarity*100-65).toString().slice(0, 5)),
          desease: data[property].deseaseName,
          
        })
        this.cases.sort((a, b) => b.percent - a.percent)
      }

      
      
      console.log(this.cases);
      // console.log(this.dataFilled)
    })
  }

  // }
  

  // cases = [
  //   {
  //     desease: "A",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "B",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "D",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "E",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "F",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "G",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "H",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "I",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "J",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "K",
  //     percent: "B%"
  //   },
  //   {
  //     desease: "L",
  //     percent: "B%"
  //   },
  // ]

  selectedCase!: String

  dataAppear = false
  casesAppear = true

  errorBlank = false

  toggleData(){
    // this.router.
    this.dataAppear = !this.dataAppear;
  }

  toggleCases(){
    this.casesAppear = !this.casesAppear;
  }

  next(){
    // console.log(this.minPercent)
    if(this.selectedCase === undefined)
      this.errorBlank = true
    else {

      this.errorBlank = true
      this.goToSelectedCase()

    }
    
  }

  goToSelectedCase(){
    this.router.navigateByUrl(`/cases/compair/${this.caseId}/${this.selectedCase}`)
  }

  selectDesease(desaeseName:string){
    // console.log(this.selectedCase, desaeseName)
    this.selectedCase = desaeseName
    console.log(this.selectedCase)
  }

}
