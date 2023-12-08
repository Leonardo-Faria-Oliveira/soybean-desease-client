import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedCaseService } from './selected-case.service';
import { convertValues } from '../utils/conversion';

@Component({
  selector: 'app-selected-case',
  templateUrl: './selected-case.component.html',
  styleUrls: ['./selected-case.component.css']
})
export class SelectedCaseComponent implements OnInit{


  constructor(
    private selectedCaseService: SelectedCaseService,
    private activatedRoute : ActivatedRoute,
    private router: Router
    ) { }

  deseaseName = this.activatedRoute.snapshot.paramMap.get("name")
  caseId = this.activatedRoute.snapshot.paramMap.get("id")

  // desease =  null
  // case = "null"

  data = new Array<any>()

  ngOnInit(): void {
    var auxDesease
    var auxCase: { [x: string]: any; }
    this.selectedCaseService.getCase(this.caseId!).subscribe((e)=>{
        auxCase  = e
    })


    this.selectedCaseService.getCaseByName(this.deseaseName!).subscribe((e)=>{
      auxDesease = e

      
      for(let property in e){
        // let aux = [property]
        if(property != "id" && property != "deseaseName"){
          // let aux = auxDesease
          this.data.push({
            data: convertValues(property, auxCase[property]),
            value: convertValues(property, e[property])
          })
        }
      }

    })


    // console.log(this.dataFilled);

  }

 

  accepted = false

  Accept(){
    this.selectedCaseService.updateCaseName(this.caseId!, this.deseaseName!).subscribe((e)=>{
      console.log(e)
    })
    this.accepted = true
    setTimeout(() => this.router.navigateByUrl('/form'), 1000)
  }

}
