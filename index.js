const {app, BrowserWindow, dialog, Menu, shell}=require('electron');
var mainWin, calcWin, searchWin, commandsWin, settingsWin;
const dir=__dirname;

function openCalc(){
  calcWin=new BrowserWindow({
    width: 450, height: 538.25,
    backgroundColor: '#131313',
    icon: `${dir}/src/image/icon.png`
  })
  calcWin.loadFile(`./src/app/calc/index.html`);
}
function openSearch() {
  searchWin=new BrowserWindow({
    width: 800, height: 500,
    backgroundColor: '#888888',
    icon: `${dir}/src/image/icon.png`,
  })
  searchWin.loadFile('./src/app/search/index.html');
}
function openPrompt(){
  commandsWin=new BrowserWindow({
    width: 750, height: 475,
    backgroundColor: '#111',
    icon: `${dir}/src/image/icon.png`
  })
  commandsWin.loadFile('./src/app/commands/index.html');
}
function openSettings(){
  settingsWin=new BrowserWindow({
    width: 1000, height: 650,
    backgroundColor: '#888888',
    icon: `${dir}/image/icon.png`
  })
  settingsWin.loadFile('./src/app/settings/index.html');
}

function neWin(){
  mainWin=new BrowserWindow({
    width: 850, height: 550, minWidth: 600, minHeight: 400,
    backgroundColor: '#fff',
    icon: `${__dirname}/src/image/icon.png`,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      nodeIntegration:false,
      contextIsolation: true,
      preload: `${__dirname}/src/script/node.js`
    }
  });
  mainWin.loadFile(`${__dirname}/src/index.html`);
  mainWin.on('closed',()=>{
    mainWin=null;
  })
}

app.on('ready', neWin);

app.on('window-all-closed',()=>{
  if(process.platform!=='darwin'){
    app.quit();
  }
});

app.on('activate',()=>{
  if(mainWin===null){
    neWin();
  }
})

let menu=Menu.buildFromTemplate([
  {
    label: '表示',
    submenu: [
      {
        label: 'Litestについて',
        accelerator: 'CmdOrCtrl+Alt+A',
        click: ()=>{
          dialog.showMessageBox(null, {
            type: 'info',
            icon: './src/image/icon.png',
            title: 'Litestについて',
            message: 'Litest 2.0.0 B3A3について',
            detail: 'バージョン: 2.0.0 Beta 3 Alpha 3\nビルド番号: 13\n\n開発者: Sorakime\n公式サイト: https://sorakime.github.io/mncr/litest/\nリポジトリ: https://github.com/Sorakime/Litest\n\nCopyright 2021 Sorakime.'
          })
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'reload',
        label: '再読み込み'
      },
      {
        role: 'forceReload',
        label: 'より強い再読み込み'
      },
      {
        type: 'separator'
      },
      {
        label: '拡大・縮小',
        submenu: [
          {
            role: 'zoomIn',
            label: '拡大',
            accelerator: 'CmdOrCtrl+^'
          },
          {
            role: 'zooomOut',
            label: '縮小',
            accelerator: 'CmdOrCtrl+-'
          },
          {
            role: 'resetZoom',
            label: '拡大率をリセット',
            accelerator: 'CmdOrCtrl+0'
          }
        ]
      },
      {
        role: 'togglefullscreen',
        label: '全画面で表示'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit',
        label: 'Litest を終了',
        accelerator: 'CmdOrCtrl+Q'
      }
    ]
  },
  {
    label: '開発者',
    submenu: [
      {
        role: 'toggleDevTools',
        label: '開発者向けツール',
        accelerator: 'F12'
      },
      {
        label: 'ソースコードの確認',
        accelerator: 'CmdOrCtrl+Alt+S',
        click: ()=>{
          shell.openExternal('https://github.com/Sorakime/litest/tree/13');
        }
      }
    ]
  },
  {
    label: '編集',
    submenu: [
      {
        role: 'undo',
        label: '元に戻す'
      },
      {
        role: 'redo',
        label: 'やり直し'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut',
        label: 'カット'
      },
      {
        role: 'copy',
        label: 'コピー'
      },
      {
        role: 'paste',
        label: '貼り付け'
      },
      {
        type: 'separator'
      },
      {
        role: 'selectAll',
        label: 'すべて選択'
      }
    ]
  },
  {
    label: 'アプリ',
    submenu: [
      {
        label: 'Calc',
        accelerator: 'CmdOrCtrl+Alt+1',
        click: ()=>{
          openCalc();
        }
      },
      {
        label: 'Search',
        accelerator: 'CmdOrCtrl+Alt+2',
        click: ()=>{
          openSearch();
        }
      },
      {
        label: 'Commands',
        accelerator: 'CmdOrCtrl+Alt+3',
        click: ()=>{
          openPrompt();
        }
      },
      {
        label: 'Settings',
        accelerator: 'CmdOrCtrl+Alt+4',
        click: ()=>{
          openSettings();
        }
      }
    ]
  }
])
Menu.setApplicationMenu(menu);
