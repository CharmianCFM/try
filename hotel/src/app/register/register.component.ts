import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Client } from '../domain/client';
import { RegisterService } from '../service/register.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  client = new Client();
  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
    }
    console.log(value);
    this.registerService.createClient(this.client)
    .then(client => {
      console.log(client);
    });
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
    }
  }

  validateConfirmPassword() {
    setTimeout(_ => {
      this.validateForm.controls[ 'passwordConfirmation' ].updateValueAndValidity();
    })
  }

  userNameAsyncValidator = (control: FormControl): any => {
    return Observable.create(function (observer) {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  };

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }
checkphone = (control: FormControl): { [s: string]: boolean } => {
  const EMAIL_REGEXP =/^1[34578]\d{9}$/;
  if (!control.value) {
    return { required: true }
  } else if (!EMAIL_REGEXP.test(control.value)) {
    return { error: true, phoneNumber: true };
  }

};
  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, email: true };
    }
  };
  passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  };
  checkIDCARD = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, sfz: true };
    }
  };
  checkpassword = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[0-9a-zA-Z!@#$^]{6,18}$/;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, password: true };
    }
  };
  constructor(private registerService: RegisterService,private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName            : [ '', [ Validators.required ], [ this.userNameAsyncValidator ] ],
      phoneNumber      : [ '', [this.checkphone ]],
      email               : [ '', [ this.emailValidator ] ],
      password            : [ '', [ this.checkpassword ] ],
      passwordConfirmation: [ '', [ this.passwordConfirmationValidator ] ],
      sfz            : [ '', [ this.checkIDCARD ] ],
    });
   }
  
  
    updateConfirmValidator() {
      /** wait for refresh value */
      setTimeout(_ => {
        this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
      });
    }
  
    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
      if (!control.value) {
        return { required: true };
      } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
        return { confirm: true, error: true };
      }
    };
  
    getCaptcha(e: MouseEvent) {
      e.preventDefault();
    }
  ngOnInit() {
    
  }
  onSubmit() {
    this.registerService.createClient(this.client)
      .then(client => {
        console.log(client);
      });
  }

}
