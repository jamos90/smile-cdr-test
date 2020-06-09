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

  questionnaireResponse;

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

  submitForm(): any {
    this.questionnaireResponse = {
      identifier: "test-questionnaire",
      status: 'completed',
      authored: Date.now(),
      source: 'patient',
      allergies: {
        definition: 'allergies',
        linkId: 1,
        text: "Do you have allergies?",
        answer: this.questionnaireForm.value['1']

      },
      generalQuestions: {
        definition: 'General questions',
        linkId: 2,
        text: 'General questions',
        gender: {
          linkId: 2.1,
          text: "What is your gender?",
          answer: this.questionnaireForm.value['2']['2.1']
        },
        birthdate: {
          linkId: 2.2,
          text: 'What is your date of birth',
          answer: this.questionnaireForm.value['2']['2.2']
        },
        countryOfBirth: {
          linkId: 2.3,
          text: 'What is your county of birth',
          answer: this.questionnaireForm.value['2']['2.3']
        },
        maritalStatus: {
          linkId: 2.4,
          text: 'What is your marital status',
          answer: this.questionnaireForm.value['2']['2.4']
        }
      },
      intoxications: {
        definition: 'Intoxications',
        linkId: 3,
        text: 'Intoxications',
        smoking: {
          linkId: 3.1,
          text: 'Do you smoke',
          answer: this.questionnaireForm.value['3']['3.1']
        },
        drinking: {
          linkId: 3.2,
          text: 'Do you drink',
          answer: this.questionnaireForm.value['3']['3.2']
        }
      }
         
    }
  }

  ngOnInit(): void {
  }
}
