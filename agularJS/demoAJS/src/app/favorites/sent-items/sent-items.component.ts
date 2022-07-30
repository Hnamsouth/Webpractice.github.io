import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent-items',
  templateUrl: './sent-items.component.html',
  styleUrls: ['./sent-items.component.css']
})
export class FVRSentItemsComponent implements OnInit {
  items =[
    {
    name:'Gemma Roberson',
    info:{
      age:24,
      workExpreience:[
        {
          nameCompany:'GLOWPIXELLTD',
          workarea:'Orlando',
          timework:'2015-2016',
          describe:{
            namejob:'Senior Graphic Designer',
            describeDetail:'Customer-oriented  GraphicDesigner with sironghistory of leading high petf ormweteam to meetorexceedobjectives.Dedicatedand h3lc:twcn ngwith internaldrive to deliver e>cceUence.'
          }
        },
        {
          nameCompany:'LOREMIPSUM',
          workarea:'New York',
          timework:'2014-2015',
          describe:{
            namejob:'Graphic Designer',
            describeDetail:'Customer-orie-ntecl GraphICDesignerwith s1rongh1s1oryot teactlnghigh  pert ormance team to meetorexceedobjectives. Dedicatedand hardworkingwith internaldrive to detiver excellence.'}
        },
        {
          nameCompany:'PIXELATE AGENCY',
          workarea:'New Jersey ',
          timework:'2013-2014',
          describe:{
            namejob:'Graphk & Web Designer',
            describeDetail:'Custorne-r  oriented Graphic Designerwith stronghistory of teadlng high pert ormance team to meetor exceedobjectives.Dedicatedand hatdwortcingwith intern.aldrive to del ver e.iccelk>nce.'}
        },
      ],
      education:[
        {
          school:{
            name:'University of UK',
            studyingarea:'Toronto',
            timelearn:'2010-2012'},
          subject:{
            name:'Master in Web Designer',
            subjectDetail:'Customer -oriented GraphicDesigner with saronghistory of handing high perfwith internaldrive to deliver exceUence.'
        }
      },
        {
          school:{
            name:'COLLEGE OFART',
            studyingarea:'New Ark',
            timelearn:'2006-2010'},
          subject:{
            name:'•	Bachelor In Graphic Design',
            subjectDetail:'Customer-oriented GraphicDesignerwith s1ronghis1oryof Seading high pert· ormance team to meet Of exceedobjectives.Dedicatedand hMdwofking with internaldrive to detiver exceltence.'
        }
      },
      ],
      location:{
        email:'jsandjasd@gmail.com',
        location:'  Mỹ Đình, Từ Liêm, Hà Nội',
        phone: '024-7300-8855'
      },


    },
    message:'Apolegy for late reponse email',
    sayHi:'Hello Colette Wooten'
  },
    {
    name:'Ann Garza',
    info:{
      age:28,
      workExpreience:[
        {
          nameCompany:'GLOWPIXELLTD',
          workarea:'Orlando',
          timework:'2015-2016',
          describe:{
            namejob:'Senior Graphic Designer',
            describeDetail:'Customer-oriented  GraphicDesigner with sironghistory of leading high petf ormweteam to meetorexceedobjectives.Dedicatedand h3lc:twcn ngwith internaldrive to deliver e>cceUence.'
          }
        },
        {
          nameCompany:'LOREMIPSUM',
          workarea:'New York',
          timework:'2014-2015',
          describe:{
            namejob:'Graphic Designer',
            describeDetail:'Customer-orie-ntecl      GraphICDesignerwith  s1rongh1s1oryot  teactlnghigh  pert ormance team to meetorexceedobjectives. Dedicatedand hardworkingwith internaldrive to detiver excellence.'}
        },
        {
          nameCompany:'PIXELATE AGENCY',
          workarea:'New Jersey ',
          timework:'2013-2014',
          describe:{
            namejob:'Graphk & Web Designer',
            describeDetail:'Custorne-r  oriented Graphic Designerwith stronghistory of teadlng high pert ormance team to meetor exceedobjectives.Dedicatedand hatdwortcingwith intern.aldrive to del ver e.iccelk>nce.'}
        },
      ],
      education:[
        {
          school:{
            name:'University of UK',
            studyingarea:'Toronto',
            timelearn:'2010-2012'},
          subject:{
            name:'Master in Web Designer',
            subjectDetail:'Customer -oriented GraphicDesigner with saronghistory of handing high perfwith internaldrive to deliver exceUence.'
        }
      },
        {
          school:{
            name:'COLLEGE OFART',
            studyingarea:'New Ark',
            timelearn:'2006-2010'},
          subject:{
            name:'•	Bachelor In Graphic Design',
            subjectDetail:'Customer-oriented GraphicDesignerwith s1ronghis1oryof Seading high pert· ormance team to meet Of exceedobjectives.Dedicatedand hMdwofking with internaldrive to detiver exceltence.'
        }
      },
      ],
      location:{
        email:'jsandjasd@gmail.com',
        location:'  Mỹ Đình, Từ Liêm, Hà Nội',
        phone: '024-7300-8855'
      },


    },
    message:'Application for Job Tile',
    sayHi:'Hello Kerry Best'
  },
    {
    name:'Alfonso Burnett',
    info:{
      age:32,
      workExpreience:[
        {
          nameCompany:'GLOWPIXELLTD',
          workarea:'Orlando',
          timework:'2015-2016',
          describe:{
            namejob:'Senior Graphic Designer',
            describeDetail:'Customer-oriented  GraphicDesigner with sironghistory of leading high petf ormweteam to meetorexceedobjectives.Dedicatedand h3lc:twcn ngwith internaldrive to deliver e>cceUence.'
          }
        },
        {
          nameCompany:'LOREMIPSUM',
          workarea:'New York',
          timework:'2014-2015',
          describe:{
            namejob:'Graphic Designer',
            describeDetail:'Customer-orie-ntecl      GraphICDesignerwith  s1rongh1s1oryot  teactlnghigh  pert ormance team to meetorexceedobjectives. Dedicatedand hardworkingwith internaldrive to detiver excellence.'}
        },
        {
          nameCompany:'PIXELATE AGENCY',
          workarea:'New Jersey ',
          timework:'2013-2014',
          describe:{
            namejob:'Graphk & Web Designer',
            describeDetail:'Custorne-r  oriented Graphic Designerwith stronghistory of teadlng high pert ormance team to meetor exceedobjectives.Dedicatedand hatdwortcingwith intern.aldrive to del ver e.iccelk>nce.'}
        },
      ],
      education:[
        {
          school:{
            name:'University of UK',
            studyingarea:'Toronto',
            timelearn:'2010-2012'},
          subject:{
            name:'Master in Web Designer',
            subjectDetail:'Customer -oriented GraphicDesigner with saronghistory of handing high perfwith internaldrive to deliver exceUence.'
        }
      },
        {
          school:{
            name:'COLLEGE OFART',
            studyingarea:'New Ark',
            timelearn:'2006-2010'},
          subject:{
            name:'•	Bachelor In Graphic Design',
            subjectDetail:'Customer-oriented GraphicDesignerwith s1ronghis1oryof Seading high pert· ormance team to meet Of exceedobjectives.Dedicatedand hMdwofking with internaldrive to detiver exceltence.'
        }
      },
      ],
      location:{
        email:'jsandjasd@gmail.com',
        location:'  Mỹ Đình, Từ Liêm, Hà Nội',
        phone: '024-7300-8855'
      },


    },
    message:'Anything I can help with',
    sayHi:'Hello Otto Ashley'
  },
    {
    name:'Rogan Espinoza',
    info:{
      age:38,
      workExpreience:[
        {
          nameCompany:'GLOWPIXELLTD',
          workarea:'Orlando',
          timework:'2015-2016',
          describe:{
            namejob:'Senior Graphic Designer',
            describeDetail:'Customer-oriented  GraphicDesigner with sironghistory of leading high petf ormweteam to meetorexceedobjectives.Dedicatedand h3lc:twcn ngwith internaldrive to deliver e>cceUence.'
          }
        },
        {
          nameCompany:'LOREMIPSUM',
          workarea:'New York',
          timework:'2014-2015',
          describe:{
            namejob:'Graphic Designer',
            describeDetail:'Customer-orie-ntecl      GraphICDesignerwith  s1rongh1s1oryot  teactlnghigh  pert ormance team to meetorexceedobjectives. Dedicatedand hardworkingwith internaldrive to detiver excellence.'}
        },
        {
          nameCompany:'PIXELATE AGENCY',
          workarea:'New Jersey ',
          timework:'2013-2014',
          describe:{
            namejob:'Graphk & Web Designer',
            describeDetail:'Custorne-r  oriented Graphic Designerwith stronghistory of teadlng high pert ormance team to meetor exceedobjectives.Dedicatedand hatdwortcingwith intern.aldrive to del ver e.iccelk>nce.'}
        },
      ],
      education:[
        {
          school:{
            name:'University of UK',
            studyingarea:'Toronto',
            timelearn:'2010-2012'},
          subject:{
            name:'Master in Web Designer',
            subjectDetail:'Customer -oriented GraphicDesigner with saronghistory of handing high perfwith internaldrive to deliver exceUence.'
        }
      },
        {
          school:{
            name:'COLLEGE OFART',
            studyingarea:'New Ark',
            timelearn:'2006-2010'},
          subject:{
            name:'•	Bachelor In Graphic Design',
            subjectDetail:'Customer-oriented GraphicDesignerwith s1ronghis1oryof Seading high pert· ormance team to meet Of exceedobjectives.Dedicatedand hMdwofking with internaldrive to detiver exceltence.'
        }
      },
      ],
      location:{
        email:'RoganEspinoza@gmail.com',
        location:'  Mỹ Đình, Từ Liêm, Hà Nội',
        phone: '98456165135'
      },


    },
    message:'Assistant Marketing Department',
    sayHi:'Hello Kerry Best'
  },
    {
    name:'Rogan Espinnoza',
    info:{
      age:27,
      workExpreience:[
        {
          nameCompany:'GLOWPIXELLTD',
          workarea:'Orlando',
          timework:'2015-2016',
          describe:{
            namejob:'Senior Graphic Designer',
            describeDetail:'Customer-oriented  GraphicDesigner with sironghistory of leading high petf ormweteam to meetorexceedobjectives.Dedicatedand h3lc:twcn ngwith internaldrive to deliver e>cceUence.'
          }
        },
        {
          nameCompany:'LOREMIPSUM',
          workarea:'New York',
          timework:'2014-2015',
          describe:{
            namejob:'Graphic Designer',
            describeDetail:'Customer-orie-ntecl      GraphICDesignerwith  s1rongh1s1oryot  teactlnghigh  pert ormance team to meetorexceedobjectives. Dedicatedand hardworkingwith internaldrive to detiver excellence.'}
        },
        {
          nameCompany:'PIXELATE AGENCY',
          workarea:'New Jersey ',
          timework:'2013-2014',
          describe:{
            namejob:'Graphk & Web Designer',
            describeDetail:'Custorne-r  oriented Graphic Designerwith stronghistory of teadlng high pert ormance team to meetor exceedobjectives.Dedicatedand hatdwortcingwith intern.aldrive to del ver e.iccelk>nce.'}
        },
      ],
      education:[
        {
          school:{
            name:'University of UK',
            studyingarea:'Toronto',
            timelearn:'2010-2012'},
          subject:{
            name:'Master in Web Designer',
            subjectDetail:'Customer -oriented GraphicDesigner with saronghistory of handing high perfwith internaldrive to deliver exceUence.'
        }
      },
        {
          school:{
            name:'COLLEGE OFART',
            studyingarea:'New Ark',
            timelearn:'2006-2010'},
          subject:{
            name:'•	Bachelor In Graphic Design',
            subjectDetail:'Customer-oriented GraphicDesignerwith s1ronghis1oryof Seading high pert· ormance team to meet Of exceedobjectives.Dedicatedand hMdwofking with internaldrive to detiver exceltence.'
        }
      },
      ],
      location:{
        email:'SierraKerr@gmail.com',
        location:'  Mỹ Đình, Từ Liêm, Hà Nội',
        phone: '01231456789'
      },


    },
    message:'Application for Transfer',
    sayHi:'Hi Halle Lindsey'
  }
]
stig:string|undefined;
  allcolor=['#6f42c1','#d63384','#fd7e14','#198754','#0d6efd']
  constructor() {
    var main=localStorage.setItem('items',JSON.stringify(this.items));
    // Test
    var test =localStorage.getItem('items');
    this.stig=JSON.parse(localStorage.getItem('items')!);
  }

  ngOnInit(): void {
    // JSON.parse(main)
  }

}
