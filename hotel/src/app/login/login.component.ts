import { Component, OnInit, Inject,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../domain/auth';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  auth: Auth;
  validateForm: FormGroup;
  createNotification = (type) => {
    this._notification.create(type, '登录失败/(ㄒoㄒ)/~~！！', '请您重新输入~');
  };
    _submitForm(value) {
      for (const key in this.validateForm.controls) {
        this.validateForm.controls[ key ].markAsDirty();
      }
      console.log(value);
      this.service
      .loginWithCredentials(this.validateForm.controls['userName'].value, this.validateForm.controls['password'].value)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
        console.log(redirectUrl);
        if(!auth.hasError){
          this.createNotification('success');
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
          location.reload();
          
        } else {
          this.auth = Object.assign({}, auth);
          this.createNotification('error');
          //this.createNotification('success');
        }
      });
    this.stroge(this.validateForm.controls['userName'].value);
    
    }
    stroge(usrname:string){
      localStorage.setItem('userName', usrname);
      
      console.log(localStorage);
    }
    checkIDCARD = (control: FormControl): { [s: string]: boolean } => {
      const EMAIL_REGEXP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if (!control.value) {
        return { required: true }
      } else if (!EMAIL_REGEXP.test(control.value)) {
        return { error: true, sfz: true };
      }
    };
    getFormControl(name) {
      return this.validateForm.controls[ name ];
    }
  constructor(@Inject('auth') private service, private router: Router,private fb: FormBuilder,private _notification: NzNotificationService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ this.checkIDCARD] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
/*onSubmit(formValue){
  console.log(formValue.login);

  this.service
    .loginWithCredentials(formValue.login.username, formValue.login.password)
    .then(auth => {
      let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
      console.log(redirectUrl);
      if(!auth.hasError){
        this.router.navigate([redirectUrl]);
        localStorage.removeItem('redirectUrl');
        location.reload();
      } else {
        this.auth = Object.assign({}, auth);
      }
    });
  this.stroge(formValue.login.username);
}
 stroge(usrname:string){
  localStorage.setItem('userName', usrname);
  console.log(localStorage);
}
*/

}
