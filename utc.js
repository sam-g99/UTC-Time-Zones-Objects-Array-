const rp = require('request-promise');
const table = require('cheerio-tableparser')
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_time_zone_abbreviations';
const lower = (x) => x.toLowerCase()
rp(url).then(function(html) {
  //success!
  table($);
  const amount = $('.wikitable', html).length;
  const parsed = $('.wikitable', html).parsetable(true, true, true);
  let str = '';
  const abbr = parsed[0];
  const name = parsed[1];
  const offset = parsed[2];
  let i = 0;
  abbr.forEach(() => {
    str += `\n{\n abbr: '${lower(abbr[i])}',\n name: '${lower(name[i].split(`'`).pop())}',\n offset:'${lower(offset[i].split('UTC').pop())}'\n},`;
    i += 1;
  });
  console.log(str);
}).catch(function(err) {
  //handle error
});

//OUTPUT IF YOU DON'T NEED TO MAKE ANY ADJUSTMENTS
const timezones = [
      {
        abbr: 'acdt',
        name: 'australian central daylight savings time',
        offset:'+10:30'
       },
       {
        abbr: 'acst',
        name: 'australian central standard time',
        offset:'+09:30'
       },
       {
        abbr: 'act',
        name: 'acre time',
        offset:'−05'
       },
       {
        abbr: 'act',
        name: 'asean common time',
        offset:'+09'
       },
       {
        abbr: 'acwst',
        name: 'australian central western standard time (unofficial)',
        offset:'+08:45'
       },
       {
        abbr: 'adt',
        name: 'atlantic daylight time',
        offset:'−03'
       },
       {
        abbr: 'aedt',
        name: 'australian eastern daylight savings time',
        offset:'+11'
       },
       {
        abbr: 'aest',
        name: 'australian eastern standard time',
        offset:'+10'
       },
       {
        abbr: 'aft',
        name: 'afghanistan time',
        offset:'+04:30'
       },
       {
        abbr: 'akdt',
        name: 'alaska daylight time',
        offset:'−08'
       },
       {
        abbr: 'akst',
        name: 'alaska standard time',
        offset:'−09'
       },
       {
        abbr: 'amst',
        name: 'amazon summer time (brazil)[1]',
        offset:'−03'
       },
       {
        abbr: 'amt',
        name: 'amazon time (brazil)[2]',
        offset:'−04'
       },
       {
        abbr: 'amt',
        name: 'armenia time',
        offset:'+04'
       },
       {
        abbr: 'art',
        name: 'argentina time',
        offset:'−03'
       },
       {
        abbr: 'ast',
        name: 'arabia standard time',
        offset:'+03'
       },
       {
        abbr: 'ast',
        name: 'atlantic standard time',
        offset:'−04'
       },
       {
        abbr: 'awst',
        name: 'australian western standard time',
        offset:'+08'
       },
       {
        abbr: 'azost',
        name: 'azores summer time',
        offset:'±00'
       },
       {
        abbr: 'azot',
        name: 'azores standard time',
        offset:'−01'
       },
       {
        abbr: 'azt',
        name: 'azerbaijan time',
        offset:'+04'
       },
       {
        abbr: 'bdt',
        name: 'brunei time',
        offset:'+08'
       },
       {
        abbr: 'biot',
        name: 'british indian ocean time',
        offset:'+06'
       },
       {
        abbr: 'bit',
        name: 'baker island time',
        offset:'−12'
       },
       {
        abbr: 'bot',
        name: 'bolivia time',
        offset:'−04'
       },
       {
        abbr: 'brst',
        name: 'brasília summer time',
        offset:'−02'
       },
       {
        abbr: 'brt',
        name: 'brasilia time',
        offset:'−03'
       },
       {
        abbr: 'bst',
        name: 'bangladesh standard time',
        offset:'+06'
       },
       {
        abbr: 'bst',
        name: 'bougainville standard time[3]',
        offset:'+11'
       },
       {
        abbr: 'bst',
        name: 'british summer time (british standard time from feb 1968 to oct 1971)',
        offset:'+01'
       },
       {
        abbr: 'btt',
        name: 'bhutan time',
        offset:'+06'
       },
       {
        abbr: 'cat',
        name: 'central africa time',
        offset:'+02'
       },
       {
        abbr: 'cct',
        name: 'cocos islands time',
        offset:'+06:30'
       },
       {
        abbr: 'cdt',
        name: 'central daylight time (north america)',
        offset:'−05'
       },
       {
        abbr: 'cdt',
        name: 'cuba daylight time[4]',
        offset:'−04'
       },
       {
        abbr: 'cest',
        name: 'central european summer time (cf. haec)',
        offset:'+02'
       },
       {
        abbr: 'cet',
        name: 'central european time',
        offset:'+01'
       },
       {
        abbr: 'chadt',
        name: 'chatham daylight time',
        offset:'+13:45'
       },
       {
        abbr: 'chast',
        name: 'chatham standard time',
        offset:'+12:45'
       },
       {
        abbr: 'chot',
        name: 'choibalsan standard time',
        offset:'+08'
       },
       {
        abbr: 'chost',
        name: 'choibalsan summer time',
        offset:'+09'
       },
       {
        abbr: 'chst',
        name: 'chamorro standard time',
        offset:'+10'
       },
       {
        abbr: 'chut',
        name: 'chuuk time',
        offset:'+10'
       },
       {
        abbr: 'cist',
        name: 'clipperton island standard time',
        offset:'−08'
       },
       {
        abbr: 'cit',
        name: 'central indonesia time',
        offset:'+08'
       },
       {
        abbr: 'ckt',
        name: 'cook island time',
        offset:'−10'
       },
       {
        abbr: 'clst',
        name: 'chile summer time',
        offset:'−03'
       },
       {
        abbr: 'clt',
        name: 'chile standard time',
        offset:'−04'
       },
       {
        abbr: 'cost',
        name: 'colombia summer time',
        offset:'−04'
       },
       {
        abbr: 'cot',
        name: 'colombia time',
        offset:'−05'
       },
       {
        abbr: 'cst',
        name: 'central standard time (north america)',
        offset:'−06'
       },
       {
        abbr: 'cst',
        name: 'china standard time',
        offset:'+08'
       },
       {
        abbr: 'cst',
        name: 'cuba standard time',
        offset:'−05'
       },
       {
        abbr: 'ct',
        name: 'china time',
        offset:'+08'
       },
       {
        abbr: 'cvt',
        name: 'cape verde time',
        offset:'−01'
       },
       {
        abbr: 'cwst',
        name: 'central western standard time (australia) unofficial',
        offset:'+08:45'
       },
       {
        abbr: 'cxt',
        name: 'christmas island time',
        offset:'+07'
       },
       {
        abbr: 'davt',
        name: 'davis time',
        offset:'+07'
       },
       {
        abbr: 'ddut',
        name: 'urville time',
        offset:'+10'
       },
       {
        abbr: 'dft',
        name: 'aix-specific equivalent of central european time[nb 1]',
        offset:'+01'
       },
       {
        abbr: 'easst',
        name: 'easter island summer time',
        offset:'−05'
       },
       {
        abbr: 'east',
        name: 'easter island standard time',
        offset:'−06'
       },
       {
        abbr: 'eat',
        name: 'east africa time',
        offset:'+03'
       },
       {
        abbr: 'ect',
        name: 'eastern caribbean time (does not recognise dst)',
        offset:'−04'
       },
       {
        abbr: 'ect',
        name: 'ecuador time',
        offset:'−05'
       },
       {
        abbr: 'edt',
        name: 'eastern daylight time (north america)',
        offset:'−04'
       },
       {
        abbr: 'eest',
        name: 'eastern european summer time',
        offset:'+03'
       },
       {
        abbr: 'eet',
        name: 'eastern european time',
        offset:'+02'
       },
       {
        abbr: 'egst',
        name: 'eastern greenland summer time',
        offset:'±00'
       },
       {
        abbr: 'egt',
        name: 'eastern greenland time',
        offset:'−01'
       },
       {
        abbr: 'eit',
        name: 'eastern indonesian time',
        offset:'+09'
       },
       {
        abbr: 'est',
        name: 'eastern standard time (north america)',
        offset:'−05'
       },
       {
        abbr: 'fet',
        name: 'further-eastern european time',
        offset:'+03'
       },
       {
        abbr: 'fjt',
        name: 'fiji time',
        offset:'+12'
       },
       {
        abbr: 'fkst',
        name: 'falkland islands summer time',
        offset:'−03'
       },
       {
        abbr: 'fkt',
        name: 'falkland islands time',
        offset:'−04'
       },
       {
        abbr: 'fnt',
        name: 'fernando de noronha time',
        offset:'−02'
       },
       {
        abbr: 'galt',
        name: 'galápagos time',
        offset:'−06'
       },
       {
        abbr: 'gamt',
        name: 'gambier islands time',
        offset:'−09'
       },
       {
        abbr: 'get',
        name: 'georgia standard time',
        offset:'+04'
       },
       {
        abbr: 'gft',
        name: 'french guiana time',
        offset:'−03'
       },
       {
        abbr: 'gilt',
        name: 'gilbert island time',
        offset:'+12'
       },
       {
        abbr: 'git',
        name: 'gambier island time',
        offset:'−09'
       },
       {
        abbr: 'gmt',
        name: 'greenwich mean time',
        offset:'±00'
       },
       {
        abbr: 'gst',
        name: 'south georgia and the south sandwich islands time',
        offset:'−02'
       },
       {
        abbr: 'gst',
        name: 'gulf standard time',
        offset:'+04'
       },
       {
        abbr: 'gyt',
        name: 'guyana time',
        offset:'−04'
       },
       {
        abbr: 'hdt',
        name: 'hawaii–aleutian daylight time',
        offset:'−09'
       },
       {
        abbr: 'haec',
        name: 'europe centrale french-language name for cest',
        offset:'+02'
       },
       {
        abbr: 'hst',
        name: 'hawaii–aleutian standard time',
        offset:'−10'
       },
       {
        abbr: 'hkt',
        name: 'hong kong time',
        offset:'+08'
       },
       {
        abbr: 'hmt',
        name: 'heard and mcdonald islands time',
        offset:'+05'
       },
       {
        abbr: 'hovst',
        name: 'khovd summer time',
        offset:'+08'
       },
       {
        abbr: 'hovt',
        name: 'khovd standard time',
        offset:'+07'
       },
       {
        abbr: 'ict',
        name: 'indochina time',
        offset:'+07'
       },
       {
        abbr: 'idlw',
        name: 'international day line west time zone',
        offset:'−12'
       },
       {
        abbr: 'idt',
        name: 'israel daylight time',
        offset:'+03'
       },
       {
        abbr: 'iot',
        name: 'indian ocean time',
        offset:'+03'
       },
       {
        abbr: 'irdt',
        name: 'iran daylight time',
        offset:'+04:30'
       },
       {
        abbr: 'irkt',
        name: 'irkutsk time',
        offset:'+08'
       },
       {
        abbr: 'irst',
        name: 'iran standard time',
        offset:'+03:30'
       },
       {
        abbr: 'ist',
        name: 'indian standard time',
        offset:'+05:30'
       },
       {
        abbr: 'ist',
        name: 'irish standard time[5]',
        offset:'+01'
       },
       {
        abbr: 'ist',
        name: 'israel standard time',
        offset:'+02'
       },
       {
        abbr: 'jst',
        name: 'japan standard time',
        offset:'+09'
       },
       {
        abbr: 'kalt',
        name: 'kaliningrad time',
        offset:'+02'
       },
       {
        abbr: 'kgt',
        name: 'kyrgyzstan time',
        offset:'+06'
       },
       {
        abbr: 'kost',
        name: 'kosrae time',
        offset:'+11'
       },
       {
        abbr: 'krat',
        name: 'krasnoyarsk time',
        offset:'+07'
       },
       {
        abbr: 'kst',
        name: 'korea standard time',
        offset:'+09'
       },
       {
        abbr: 'lhst',
        name: 'lord howe standard time',
        offset:'+10:30'
       },
       {
        abbr: 'lhst',
        name: 'lord howe summer time',
        offset:'+11'
       },
       {
        abbr: 'lint',
        name: 'line islands time',
        offset:'+14'
       },
       {
        abbr: 'magt',
        name: 'magadan time',
        offset:'+12'
       },
       {
        abbr: 'mart',
        name: 'marquesas islands time',
        offset:'−09:30'
       },
       {
        abbr: 'mawt',
        name: 'mawson station time',
        offset:'+05'
       },
       {
        abbr: 'mdt',
        name: 'mountain daylight time (north america)',
        offset:'−06'
       },
       {
        abbr: 'met',
        name: 'middle european time same zone as cet',
        offset:'+01'
       },
       {
        abbr: 'mest',
        name: 'middle european summer time same zone as cest',
        offset:'+02'
       },
       {
        abbr: 'mht',
        name: 'marshall islands time',
        offset:'+12'
       },
       {
        abbr: 'mist',
        name: 'macquarie island station time',
        offset:'+11'
       },
       {
        abbr: 'mit',
        name: 'marquesas islands time',
        offset:'−09:30'
       },
       {
        abbr: 'mmt',
        name: 'myanmar standard time',
        offset:'+06:30'
       },
       {
        abbr: 'msk',
        name: 'moscow time',
        offset:'+03'
       },
       {
        abbr: 'mst',
        name: 'malaysia standard time',
        offset:'+08'
       },
       {
        abbr: 'mst',
        name: 'mountain standard time (north america)',
        offset:'−07'
       },
       {
        abbr: 'mut',
        name: 'mauritius time',
        offset:'+04'
       },
       {
        abbr: 'mvt',
        name: 'maldives time',
        offset:'+05'
       },
       {
        abbr: 'myt',
        name: 'malaysia time',
        offset:'+08'
       },
       {
        abbr: 'nct',
        name: 'new caledonia time',
        offset:'+11'
       },
       {
        abbr: 'ndt',
        name: 'newfoundland daylight time',
        offset:'−02:30'
       },
       {
        abbr: 'nft',
        name: 'norfolk island time',
        offset:'+11'
       },
       {
        abbr: 'npt',
        name: 'nepal time',
        offset:'+05:45'
       },
       {
        abbr: 'nst',
        name: 'newfoundland standard time',
        offset:'−03:30'
       },
       {
        abbr: 'nt',
        name: 'newfoundland time',
        offset:'−03:30'
       },
       {
        abbr: 'nut',
        name: 'niue time',
        offset:'−11'
       },
       {
        abbr: 'nzdt',
        name: 'new zealand daylight time',
        offset:'+13'
       },
       {
        abbr: 'nzst',
        name: 'new zealand standard time',
        offset:'+12'
       },
       {
        abbr: 'omst',
        name: 'omsk time',
        offset:'+06'
       },
       {
        abbr: 'orat',
        name: 'oral time',
        offset:'+05'
       },
       {
        abbr: 'pdt',
        name: 'pacific daylight time (north america)',
        offset:'−07'
       },
       {
        abbr: 'pet',
        name: 'peru time',
        offset:'−05'
       },
       {
        abbr: 'pett',
        name: 'kamchatka time',
        offset:'+12'
       },
       {
        abbr: 'pgt',
        name: 'papua new guinea time',
        offset:'+10'
       },
       {
        abbr: 'phot',
        name: 'phoenix island time',
        offset:'+13'
       },
       {
        abbr: 'pht',
        name: 'philippine time',
        offset:'+08'
       },
       {
        abbr: 'pkt',
        name: 'pakistan standard time',
        offset:'+05'
       },
       {
        abbr: 'pmdt',
        name: 'saint pierre and miquelon daylight time',
        offset:'−02'
       },
       {
        abbr: 'pmst',
        name: 'saint pierre and miquelon standard time',
        offset:'−03'
       },
       {
        abbr: 'pont',
        name: 'pohnpei standard time',
        offset:'+11'
       },
       {
        abbr: 'pst',
        name: 'pacific standard time (north america)',
        offset:'−08'
       },
       {
        abbr: 'pst',
        name: 'philippine standard time',
        offset:'+08'
       },
       {
        abbr: 'pyst',
        name: 'paraguay summer time[6]',
        offset:'−03'
       },
       {
        abbr: 'pyt',
        name: 'paraguay time[7]',
        offset:'−04'
       },
       {
        abbr: 'ret',
        name: 'réunion time',
        offset:'+04'
       },
       {
        abbr: 'rott',
        name: 'rothera research station time',
        offset:'−03'
       },
       {
        abbr: 'sakt',
        name: 'sakhalin island time',
        offset:'+11'
       },
       {
        abbr: 'samt',
        name: 'samara time',
        offset:'+04'
       },
       {
        abbr: 'sast',
        name: 'south african standard time',
        offset:'+02'
       },
       {
        abbr: 'sbt',
        name: 'solomon islands time',
        offset:'+11'
       },
       {
        abbr: 'sct',
        name: 'seychelles time',
        offset:'+04'
       },
       {
        abbr: 'sdt',
        name: 'samoa daylight time',
        offset:'−10'
       },
       {
        abbr: 'sgt',
        name: 'singapore time',
        offset:'+08'
       },
       {
        abbr: 'slst',
        name: 'sri lanka standard time',
        offset:'+05:30'
       },
       {
        abbr: 'sret',
        name: 'srednekolymsk time',
        offset:'+11'
       },
       {
        abbr: 'srt',
        name: 'suriname time',
        offset:'−03'
       },
       {
        abbr: 'sst',
        name: 'samoa standard time',
        offset:'−11'
       },
       {
        abbr: 'sst',
        name: 'singapore standard time',
        offset:'+08'
       },
       {
        abbr: 'syot',
        name: 'showa station time',
        offset:'+03'
       },
       {
        abbr: 'taht',
        name: 'tahiti time',
        offset:'−10'
       },
       {
        abbr: 'tha',
        name: 'thailand standard time',
        offset:'+07'
       },
       {
        abbr: 'tft',
        name: 'french southern and antarctic time[8]',
        offset:'+05'
       },
       {
        abbr: 'tjt',
        name: 'tajikistan time',
        offset:'+05'
       },
       {
        abbr: 'tkt',
        name: 'tokelau time',
        offset:'+13'
       },
       {
        abbr: 'tlt',
        name: 'timor leste time',
        offset:'+09'
       },
       {
        abbr: 'tmt',
        name: 'turkmenistan time',
        offset:'+05'
       },
       {
        abbr: 'trt',
        name: 'turkey time',
        offset:'+03'
       },
       {
        abbr: 'tot',
        name: 'tonga time',
        offset:'+13'
       },
       {
        abbr: 'tvt',
        name: 'tuvalu time',
        offset:'+12'
       },
       {
        abbr: 'ulast',
        name: 'ulaanbaatar summer time',
        offset:'+09'
       },
       {
        abbr: 'ulat',
        name: 'ulaanbaatar standard time',
        offset:'+08'
       },
       {
        abbr: 'utc',
        name: 'coordinated universal time',
        offset:'±00'
       },
       {
        abbr: 'uyst',
        name: 'uruguay summer time',
        offset:'−02'
       },
       {
        abbr: 'uyt',
        name: 'uruguay standard time',
        offset:'−03'
       },
       {
        abbr: 'uzt',
        name: 'uzbekistan time',
        offset:'+05'
       },
       {
        abbr: 'vet',
        name: 'venezuelan standard time',
        offset:'−04'
       },
       {
        abbr: 'vlat',
        name: 'vladivostok time',
        offset:'+10'
       },
       {
        abbr: 'volt',
        name: 'volgograd time',
        offset:'+04'
       },
       {
        abbr: 'vost',
        name: 'vostok station time',
        offset:'+06'
       },
       {
        abbr: 'vut',
        name: 'vanuatu time',
        offset:'+11'
       },
       {
        abbr: 'wakt',
        name: 'wake island time',
        offset:'+12'
       },
       {
        abbr: 'wast',
        name: 'west africa summer time',
        offset:'+02'
       },
       {
        abbr: 'wat',
        name: 'west africa time',
        offset:'+01'
       },
       {
        abbr: 'west',
        name: 'western european summer time',
        offset:'+01'
       },
       {
        abbr: 'wet',
        name: 'western european time',
        offset:'±00'
       },
       {
        abbr: 'wit',
        name: 'western indonesian time',
        offset:'+07'
       },
       {
        abbr: 'wst',
        name: 'western standard time',
        offset:'+08'
       },
       {
        abbr: 'yakt',
        name: 'yakutsk time',
        offset:'+09'
       },
       {
        abbr: 'yekt',
        name: 'yekaterinburg time',
        offset:'+05'
       },
]
