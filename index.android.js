/**
 * Created by luckliz on 2016/7/18.
 */
var React = require('react-native');
var {NativeAppEventEmitter,NativeModules,RCTDeviceEventEmitter,DeviceEventEmitter} = React;
var RNVununUpgrade = NativeModules.VununUpgrade;
class VununUpgrade
{
    // 构造
      constructor(props) {
        //super(props);
        // 初始状态
        this.state = {};
          //DeviceEventEmitter.addListener("VununUpgradeMessage", this.onMessage.bind(this));

      }

    onMessage(callback){
        DeviceEventEmitter.addListener("VununUpgradeMessage", callback);

    }
    // onMessage(message){
    //     console.log(JSON.stringify(message));
    //     //message_callback(JSON.stringify(message))
    // }


//String appname,String appdes,String url,Boolean isAutoDownload,Boolean isAutoUpgrade,Boolean isforce,int versioncode,String md5
    preupgrade(appname,appdes,url,autodownload,autoupgrade,force,version,md5)
    {
        RNVununUpgrade.preupgrade(appname,appdes,url,autodownload,autoupgrade,force,version,md5);
    }

    download(force)
    {
        RNVununUpgrade.download(force);
    }

    upgrade()
    {
        RNVununUpgrade.upgrade();
    }

    channgeoption(autodownload,autoupgrade)
    {
        RNVununUpgrade.setauto(autodownload,autoupgrade);
    }

    getversion(callback)
    {
        RNVununUpgrade.getversion(callback);
    }

    cancelupgrade()
    {
        RNVununUpgrade.cancel();
    }
}

module.exports = new VununUpgrade();
