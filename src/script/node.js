const {app, BrowserWindow, contextBridge, dialog}=require('electron');
const fs=require('fs');
const dir=__dirname;
let mainWin, calcWin, searchWin, commandsWin, settingsWin;

contextBridge.exposeInMainWorld(
  "node", {
    getBack: ()=>{
      let file=fs.readFileSync(`${__dirname}/../../config/config.json`, 'utf-8');
      let obj=JSON.parse(file);
      return obj;
    },
    get__dirname: ()=>{
      return __dirname;
    },
    writeBack: (name)=>{
      let file=fs.readFileSync(`${__dirname}/../../config/config.json`, 'utf-8');
      let obj=JSON.parse(file);
      obj.background=name;
      fs.writeFileSync(`${__dirname}../../../config/config.json`,JSON.stringify(obj));
    },
    ver: (type)=>{
      if(type=='vershort'){
        return '2.0.0';
      }else if(type=='ver'){
        return 'Litest ver.2.0.0';
      }else if(type=='ba'){
        return 'B3A2';
      }else if(type=='Ba'){
        return 'Beta 3 Alpha 3';
      }else if(type=='full'){
        return 'Litest ver.2.0.0 Beta 3 Alpha 3';
      }else if (type=='build'){
        return '13';
      }
    },
    getSearch: ()=>{
      let file=fs.readFileSync(`${__dirname}/../../config/config.json`,'utf-8');
      let obj=JSON.parse(file);
      return obj.search;
    },
    writeSearch: (name)=>{
      let file=fs.readFileSync(`${__dirname}/../../config/config.json`, 'utf-8');
      let obj=JSON.parse(file);
      obj.search.engine=name;
      fs.writeFileSync(`${__dirname}../../../config/config.json`,JSON.stringify(obj));
    },
    getAccent: ()=>{
      let file=fs.readFileSync(`${__dirname}/../../config/config.json`,'utf-8');
      let obj=JSON.parse(file);
      return obj.accent;
    },
    writeAccent: (hex)=>{
      let file=fs.readFileSync(`${__dirname}/../../config/config.json`,'utf-8');
      let obj=JSON.parse(file);
      obj.accent=hex;
      fs.writeFileSync(`${__dirname}/../../config/config.json`,JSON.stringify(obj));
    },
    calcOpen: ()=>{
      calcWin=new BrowserWindow({
        width: 450, height: 538.25,
        backgroundColor: '#131313',
        icon: `${dir}/src/image/icon.png`
      })
      calcWin.loadFile(`./src/app/calc/index.html`);
    },
    searchOpen: ()=>{
      searchWin=new BrowserWindow({
        width: 800, height: 500,
        backgroundColor: '#888888',
        icon: `${dir}/src/image/icon.png`,
      })
      searchWin.loadFile('./src/app/search/index.html');
    },
    commandsOpen: ()=>{
      commandsWin=new BrowserWindow({
        width: 750, height: 475,
        backgroundColor: '#111',
        icon: `${dir}/src/image/icon.png`
      })
      commandsWin.loadFile('./src/app/commands/index.html');
    },
    settingsOpen: ()=>{
      settingsWin=new BrowserWindow({
        width: 1000, height: 650,
        backgroundColor: '#888888',
        icon: `${dir}/image/icon.png`
      })
      settingsWin.loadFile('./src/app/settings/index.html');
    }
  }
)
