import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';




@Component({
    selector: 'app-login',
    imports: [  RouterLink,CommonModule,ReactiveFormsModule,
                MatCardModule,MatInputModule,MatFormFieldModule,MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  
    private formBuilder = inject(FormBuilder)


    constructor(private router: Router ){}

    loginForm = this.formBuilder.group({
        email:[''],
        password:['']
    })




    onSubmit(): void {
        if (this.loginForm.valid) {
          console.log('Formulario válido:', this.loginForm.value);
          // Lógica de autenticación aquí
            
          this.navigateToDashboard()

        } else {
          console.log('Formulario inválido');
        }
      }
    
    navigateToDashboard() {
        this.router.navigate(['/dashboard']);
    }

}
