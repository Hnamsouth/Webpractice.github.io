import { ÉµHttpInterceptingHandler } from '@angular/common/http';
import { Component, importProvidersFrom } from '@angular/core';
import { __importDefault } from 'tslib';
import { ISClassname } from './datatranferObject/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAJS';
  StdRCLR:ISClassname[]=[
  {
    classname:"T2204M",
    classStatus:"Hoat dong"
  },
  {
    classname:"T2456S",
    classStatus:"nghi"
  },
  {
    classname:"T2876A",
    classStatus:"Hoat dong"
  },
  {
    classname:"T2467J",
    classStatus:"nghi"
  },
  {
    classname:"T28789E",
    classStatus:"Hoat dong"
  }
]
}

