import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators} from '@angular/forms';
import * as questionaireData from '../../assets/questionnaire.json';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questionnaireControl = new FormControl('');

  constructor( private fb: FormBuilder ) { }

  data: any = (questionaireData as any).default;

  questionnaireResponse: object ;

  questionnaireForm = this.fb.group({
    '1': ['', Validators.required],
    '2': this.fb.group({
      '2.1': ['', Validators.required],
      '2.2': ['', Validators.required],
      '2.3': ['', Validators.required],
      '2.4': ['', Validators.required],
    }),
    '3': this.fb.group({
      '3.1': ['', Validators.required],
      '3.2': ['', Validators.required]
    })
  })

  updateForm() {
    console.log('update from running');
  }

  submitForm(): any {
    this.questionnaireResponse = {
      identifier: "test-questionnaire",
      status: 'completed',
      authored: Date.now(),
      item: {
        linkId: 1,
        text: "Do you have allergies?",
        answer: this.questionnaireForm.value['1']

      },
    }
  }

  ngOnInit(): void {
  }
}
