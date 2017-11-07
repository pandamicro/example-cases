require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof require && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e054epu19CIakfnS4cZU3+", "AR");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        posAR: cc.Label,
        pos: cc.Label,
        goldAR: cc.Node,
        gold: cc.Node
      },
      onLoad: function onLoad() {
        var sheep = this.goldAR.parent;
        var posAR = sheep.convertToWorldSpaceAR(cc.v2(this.goldAR.x, this.goldAR.y));
        this.posAR.string = "(" + parseInt(posAR.x) + ", " + parseInt(posAR.y) + ")";
        sheep = this.goldAR.parent;
        var pos = sheep.convertToWorldSpace(cc.v2(this.gold.x, this.gold.y));
        this.pos.string = "(" + parseInt(pos.x) + ", " + parseInt(pos.y) + ")";
      }
    });
    cc._RF.pop();
  }, {} ],
  ActionCallback: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2881e6K1edLBbgvc+6/YN7o", "ActionCallback");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var touchEvent = this.getComponent("TouchEvent");
        var mouseEvent = this.getComponent("MouseEvent");
        var event = touchEvent || mouseEvent;
        event._callback = function() {
          this.node.runAction(cc.sequence(cc.scaleTo(.5, 2, 1), cc.scaleTo(.25, 1, 1)));
        };
      }
    });
    cc._RF.pop();
  }, {} ],
  AdaptiveSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4edf1JTF/BHIKZVY3FaAqsT", "AdaptiveSprite");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        padding: 20,
        label: {
          default: null,
          type: cc.Node
        },
        backgroup: {
          default: null,
          type: cc.Node
        }
      },
      update: function update() {
        this.backgroup.width !== this.label.width && (this.backgroup.width = this.label.width + this.padding);
        this.backgroup.height !== this.label.height && (this.backgroup.height = this.label.height + this.padding);
      }
    });
    cc._RF.pop();
  }, {} ],
  AnimateCustomPropertyCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb14cmn7KJJCo4qVcOy/GmS", "AnimateCustomPropertyCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        hp: 0,
        emissionRote: 0,
        num: 0,
        hpBar: {
          default: null,
          type: cc.ProgressBar
        },
        particle: {
          default: null,
          type: cc.ParticleSystem
        },
        score: {
          default: null,
          type: cc.Label
        }
      },
      update: function update(dt) {
        this.hpBar.progress = this.hp;
        this.particle.emissionRate = this.emissionRote;
        this.score.string = Math.ceil(this.num);
      }
    });
    cc._RF.pop();
  }, {} ],
  AnimationCallback: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d311umYuNAM61hHscTxwkq", "AnimationCallback");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        playLabel: {
          default: null,
          type: cc.Label
        },
        pauseLabel: {
          default: null,
          type: cc.Label
        },
        stateLabel: {
          default: null,
          type: cc.Label
        },
        animation: {
          default: null,
          type: cc.Animation
        }
      },
      onEnable: function onEnable() {
        var animation = this.animation;
        animation.on("play", this.onPlay, this);
        animation.on("stop", this.onStop, this);
        animation.on("lastframe", this.onLastFrame, this);
        animation.on("finished", this.onFinished, this);
        animation.on("pause", this.onPause, this);
        animation.on("resume", this.onResume, this);
      },
      onDisable: function onDisable() {
        var animation = this.animation;
        animation.off("play", this.onPlay, this);
        animation.off("stop", this.onStop, this);
        animation.off("lastframe", this.onLastFrame, this);
        animation.off("finished", this.onFinished, this);
        animation.off("pause", this.onPause, this);
        animation.off("resume", this.onResume, this);
      },
      onPlayButtonClicked: function onPlayButtonClicked() {
        if ("play" === this.playLabel.string) {
          this.playLabel.string = "stop";
          this.animation.play("linear");
        } else {
          this.playLabel.string = "play";
          this.animation.stop("linear");
        }
      },
      onPauseButtonClicked: function onPauseButtonClicked() {
        if ("pause" === this.pauseLabel.string) {
          this.pauseLabel.string = "resume";
          this.animation.pause("linear");
        } else {
          this.pauseLabel.string = "pause";
          this.animation.resume("linear");
        }
      },
      onPlay: function onPlay() {
        cc.log("onPlay");
        this.stateLabel.string = "onPlay";
      },
      onStop: function onStop() {
        cc.log("onStop");
        this.stateLabel.string = "onStop";
        this.playLabel.string = "play";
      },
      onLastFrame: function onLastFrame() {
        cc.log("onLastFrame");
        this.stateLabel.string = "onLastFrame";
      },
      onFinished: function onFinished() {
        cc.log("onFinished");
        this.stateLabel.string = "onFinished";
      },
      onPause: function onPause() {
        cc.log("onPause");
        this.stateLabel.string = "onPause";
      },
      onResume: function onResume() {
        cc.log("onResume");
        this.stateLabel.string = "onResume";
      }
    });
    cc._RF.pop();
  }, {} ],
  AnimationEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dc09SR4TdLU74RjGBArlm0", "AnimationEvent");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var node = cc.find("Canvas/Label");
        this._label = node.getComponent(cc.Label);
        this._animCtrl = this.node.getComponent(cc.Animation);
      },
      onNextAnimation: function onNextAnimation(step) {
        this._animCtrl.play("step_" + step);
        this._label.string = i18n.t("cases/03_gameplay/03_animation/AnimationEvent.js.1") + step + "个动画";
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  AssetLoading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65aa6czKHtKGZog+yjK1bc6", "AssetLoading");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        showWindow: cc.Node,
        loadAnimTestPrefab: cc.Prefab,
        loadTips: cc.Label,
        loadList: {
          default: [],
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this._curType = "";
        this._lastType = "";
        this._curRes = null;
        this._btnLabel = null;
        this._audioSource = null;
        this._isLoading = false;
        this._urls = {
          Audio: "test assets/audio",
          Txt: "test assets/text",
          Texture: "test assets/PurpleMonster",
          Font: "test assets/font",
          Plist: cc.url.raw("resources/test assets/atom.plist"),
          SpriteFrame: "test assets/image",
          Prefab: "test assets/prefab",
          Animation: "test assets/sprite-anim",
          Scene: "test assets/scene",
          Spine: "spineboy/spineboy",
          CORS: "http://tools.itharbors.com/res/logo.png"
        };
        this._onRegisteredEvent();
      },
      _onRegisteredEvent: function _onRegisteredEvent() {
        for (var i = 0; i < this.loadList.length; ++i) this.loadList[i].on(cc.Node.EventType.TOUCH_END, this._onClick.bind(this));
      },
      _onClick: function _onClick(event) {
        if (this._isLoading) return;
        this._onClear();
        this._curType = event.target.name.split("_")[1];
        if ("" !== this._lastType && this._curType === this._lastType) {
          this._onShowResClick(event);
          return;
        }
        this._btnLabel && (this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.1") + this._lastType);
        this._lastType = this._curType;
        this._btnLabel = event.target.getChildByName("Label").getComponent("cc.Label");
        this.loadTips.textKey = this._curType + " Loading....";
        this._isLoading = true;
        this._load();
      },
      _load: function _load() {
        var url = this._urls[this._curType];
        var loadCallBack = this._loadCallBack.bind(this);
        switch (this._curType) {
         case "SpriteFrame":
          cc.loader.loadRes(url, cc.SpriteFrame, loadCallBack);
          break;

         case "Spine":
          cc.loader.loadRes(url, sp.SkeletonData, loadCallBack);
          break;

         case "Font":
          cc.loader.loadRes(url, cc.Font, loadCallBack);
          break;

         case "Animation":
         case "Prefab":
         case "Scene":
         case "Texture":
         case "Txt":
         case "Audio":
          cc.loader.loadRes(url, loadCallBack);
          break;

         case "CORS":
          cc.loader.load(url, loadCallBack);
          this.loadTips.textKey = "CORS image should report texImage2D error under WebGL and works ok under Canvas";
          break;

         default:
          cc.loader.load(url, loadCallBack);
        }
      },
      _loadCallBack: function _loadCallBack(err, res) {
        this._isLoading = false;
        if (err) {
          cc.log("Error url [" + err + "]");
          return;
        }
        this._curRes = res;
        "Audio" === this._curType ? this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.2") : this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.3");
        this._btnLabel.textKey += this._curType;
        this.loadTips.textKey = this._curType + " Loaded Successfully!";
      },
      _onClear: function _onClear() {
        this.showWindow.removeAllChildren(true);
        this._audioSource && this._audioSource instanceof cc.AudioSource && this._audioSource.stop();
      },
      _onShowResClick: function _onShowResClick(event) {
        if ("Scene" === this._curType) {
          cc.director.runScene(this._curRes.scene);
          cc.loader.releaseAsset(this._curRes);
          this._curRes = null;
          return;
        }
        this._createNode(this._curType, this._curRes);
      },
      _createNode: function _createNode(type, res) {
        this.loadTips.textKey = "";
        var node = new cc.Node("New " + type);
        node.setPosition(0, 0);
        var component = null;
        switch (this._curType) {
         case "SpriteFrame":
          component = node.addComponent(cc.Sprite);
          component.spriteFrame = res;
          break;

         case "Texture":
         case "CORS":
          component = node.addComponent(cc.Sprite);
          component.spriteFrame = new cc.SpriteFrame(res);
          break;

         case "Audio":
          component = node.addComponent(cc.AudioSource);
          component.clip = res;
          component.play();
          this._audioSource = component;
          this.loadTips.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.4");
          break;

         case "Txt":
          component = node.addComponent(cc.Label);
          component.lineHeight = 40;
          component.string = res;
          break;

         case "Font":
          component = node.addComponent(cc.Label);
          component.font = res;
          component.lineHeight = 40;
          component.string = "This is BitmapFont!";
          break;

         case "Plist":
          component = node.addComponent(cc.ParticleSystem);
          component.file = this._urls.Plist;
          component.resetSystem();
          break;

         case "Prefab":
          var prefab = cc.instantiate(res);
          prefab.parent = node;
          prefab.setPosition(0, 0);
          break;

         case "Animation":
          var loadAnim = cc.instantiate(this.loadAnimTestPrefab);
          loadAnim.parent = node;
          loadAnim.setPosition(0, 0);
          var AanimCtrl = loadAnim.getComponent(cc.Animation);
          AanimCtrl.addClip(res);
          AanimCtrl.play(res.name);
          break;

         case "Spine":
          component = node.addComponent(sp.Skeleton);
          component.skeletonData = res;
          component.animation = "walk";
          node.y = -248;
        }
        this.showWindow.addChild(node);
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  AudioEngineControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "251cfXAScNHQqBfLlu2ffSn", "AudioEngineControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        audio: {
          url: cc.AudioClip,
          default: null
        },
        label: {
          type: cc.Label,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.maxNum = cc.audioEngine.getMaxAudioInstance();
        this.audioPool = [];
        [ "playMusic", "playEffect" ].forEach(function(name) {
          cc.audioEngine[name] || cc.warn("." + name + " is not found!");
        });
      },
      update: function update() {
        if (!this.label) return;
        for (var i = 0; i < this.audioPool.length; i++) {
          var id = this.audioPool[i];
          var state = cc.audioEngine.getState(id);
          if (state < 0) {
            this.audioPool.splice(i, 1);
            i--;
          }
        }
        this.label.string = "Instance: " + this.audioPool.length + " / " + this.maxNum;
      },
      play: function play() {
        if (!this.audio) return;
        var id = cc.audioEngine.play(this.audio, false, 1);
        this.audioPool.push(id);
      },
      stopAll: function stopAll() {
        if (!this.audio) return;
        cc.audioEngine.stopAll();
      },
      pauseAll: function pauseAll() {
        if (!this.audio) return;
        cc.audioEngine.pauseAll();
      },
      resumeAll: function resumeAll() {
        if (!this.audio) return;
        cc.audioEngine.resumeAll();
      }
    });
    cc._RF.pop();
  }, {} ],
  AudioSourceControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21d1aBwz85GW7Z3zNuBJcwB", "AudioSourceControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        audioSource: {
          type: cc.AudioSource,
          default: null
        },
        label: {
          type: cc.Label,
          default: null
        }
      },
      onLoad: function onLoad() {},
      update: function update() {
        if (!this.label) return;
        var audio = this.audioSource;
        var currentTime = audio.getCurrentTime();
        var duration = audio.getDuration();
        if (currentTime && duration) {
          this.label.string = audio.getCurrentTime().toFixed(1) + ' s / ' + audio.getDuration().toFixed(1) + ' s';
        }
      },
      play: function play() {
        this.audioSource.play();
      },
      pause: function pause() {
        this.audioSource.pause();
      },
      stop: function stop() {
        this.audioSource.stop();
      },
      resume: function resume() {
        this.audioSource.resume();
      }
    });
    cc._RF.pop();
  }, {} ],
  Bar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "990e2c/1VlE9pmwd+Ftseau", "Bar");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: function properties() {
        return {
          refToFoo: require("Foo")
        };
      },
      onLoad: function onLoad() {
        var tip = this.node.children[0].getComponent(cc.Label);
        tip.string = this.name + " has reference to " + this.refToFoo.name;
      }
    });
    cc._RF.pop();
  }, {
    Foo: "Foo"
  } ],
  Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20d7dzfVhZNh4gNZzwaQgEl", "Bullet");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 100
      },
      onLoad: function onLoad() {},
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.destroy();
      },
      update: function update(dt) {
        this.node.y += this.speed * dt;
      }
    });
    cc._RF.pop();
  }, {} ],
  ButtonControlCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6dc7dWcxxJuofXB7ergGnC", "ButtonControlCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        button_1: cc.Button,
        button_2: cc.Button,
        display: cc.Label
      },
      onClickedButton_1: function onClickedButton_1() {
        console.log("button_1 clicked!");
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.1");
      },
      onClickedButton_2: function onClickedButton_2() {
        console.log("button_2 clicked!");
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.2");
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  ButtonInteractable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18e60T2NZpEwZAunS+2rFMK", "ButtonInteractable");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        buttonLeft: {
          default: null,
          type: cc.Button
        },
        buttonRight: {
          default: null,
          type: cc.Button
        },
        labelLeft: {
          default: null,
          type: cc.Label
        },
        labelRight: {
          default: null,
          type: cc.Label
        }
      },
      onBtnLeftClicked: function onBtnLeftClicked() {
        console.log("Left button clicked!");
        this.buttonLeft.interactable = false;
        this.buttonRight.interactable = true;
        this.updateInfo();
      },
      onBtnRightClicked: function onBtnRightClicked() {
        console.log("Right button clicked!");
        this.buttonRight.interactable = false;
        this.buttonLeft.interactable = true;
        this.updateInfo();
      },
      updateInfo: function updateInfo() {
        this.labelLeft.textKey = i18n.t("cases/02_ui/03_button/ButtonInteractable.js.1") + this.buttonLeft.interactable;
        this.labelRight.textKey = i18n.t("cases/02_ui/03_button/ButtonInteractable.js.2") + this.buttonRight.interactable;
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  ColliderListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d60fXxtXFNeI79PM6EXYuZ", "ColliderListener");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        this.touchingNumber = 0;
      },
      onCollisionEnter: function onCollisionEnter(other) {
        this.node.color = cc.Color.RED;
        this.touchingNumber++;
      },
      onCollisionStay: function onCollisionStay(other) {},
      onCollisionExit: function onCollisionExit() {
        this.touchingNumber--;
        0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
      }
    });
    cc._RF.pop();
  }, {} ],
  ComeBackToAssetLoad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb585k+cxFKjohloTN1+FuU", "ComeBackToAssetLoad");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onComeBlack: function onComeBlack() {
        cc.director.loadScene("AssetLoading.fire");
      }
    });
    cc._RF.pop();
  }, {} ],
  CreateClipCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c450SopmNKmbcQu50ror3a", "CreateClipCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var animation = this.getComponent(cc.Animation);
        cc.loader.loadRes("test assets/atlas", cc.SpriteAtlas, function(err, atlas) {
          var spriteFrames = atlas.getSpriteFrames();
          var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
          clip.name = "run";
          clip.wrapMode = cc.WrapMode.Loop;
          animation.addClip(clip);
          animation.play("run");
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  CustomEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cc23aoYcxIKazRFwKWGEI7", "CustomEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var touchEvent = this.getComponent("TouchEvent");
        touchEvent._callback = function() {
          this.node.emit("CUSTOM_EVENT");
        }.bind(this);
        var addButton = cc.find("Canvas/add");
        var cancelButton = cc.find("Canvas/cancel");
        function onCustomEvent(event) {
          this.runAction(cc.sequence(cc.scaleTo(.5, 2, 1), cc.scaleTo(.25, 1, 1)));
        }
        this.node.on("CUSTOM_EVENT", onCustomEvent, addButton);
        this.node.on("CUSTOM_EVENT", onCustomEvent, cancelButton);
      }
    });
    cc._RF.pop();
  }, {} ],
  Desactiver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dec21MuxY5K4L8T1bBPGM3r", "Desactiver");
    "use strict";
    cc.Class({
      extends: cc.Component,
      desactivate: function desactivate() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  DestroySelf: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c07302m/oFJeIq2igPCJbWE", "DestroySelf");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        console.log("Pos: " + this.node.getPosition().x + ", " + this.node.getPosition().y);
        this.node.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function() {
          console.log("Pos: " + this.node.x + ", " + this.node.y);
          this.node.destroy();
        }, this)));
      }
    });
    cc._RF.pop();
  }, {} ],
  DeviceMotionCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "189c1ckoZZHULnR52/pnCkv", "DeviceMotionCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 200,
        target: cc.Node,
        _time: 0,
        _range: cc.p(0, 0),
        _acc: cc.p(0, 0)
      },
      onLoad: function onLoad() {
        var screenSize = cc.view.getVisibleSize();
        this._range.x = screenSize.width / 2 - this.target.width / 2;
        this._range.y = screenSize.height / 2 - this.target.height / 2;
        cc.inputManager.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
      },
      onDestroy: function onDestroy() {
        cc.inputManager.setAccelerometerEnabled(false);
        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
      },
      onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        this._acc.x = event.acc.x;
        this._acc.y = event.acc.y;
      },
      update: function update(dt) {
        var target = this.target, range = this._range;
        this._time += 5;
        target.x += this._acc.x * dt * (this.speed + this._time);
        target.x = cc.clampf(target.x, -range.x, range.x);
        target.y += this._acc.y * dt * (this.speed + this._time);
        target.y = cc.clampf(target.y, -range.y, range.y);
        (target.x <= -range.x || target.x >= range.x || target.y <= -range.y || target.y >= range.y) && (this._time = 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  DragonBonesCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51a99xQI4JAXqBjenKXSIjl", "DragonBonesCtrl");
    "use strict";
    if (!cc.runtime) {
      var NORMAL_ANIMATION_GROUP = "normal";
      var AIM_ANIMATION_GROUP = "aim";
      var ATTACK_ANIMATION_GROUP = "attack";
      var JUMP_SPEED = -20;
      var NORMALIZE_MOVE_SPEED = 3.6;
      var MAX_MOVE_SPEED_FRONT = 1.4 * NORMALIZE_MOVE_SPEED;
      var MAX_MOVE_SPEED_BACK = 1 * NORMALIZE_MOVE_SPEED;
      var WEAPON_R_LIST = [ "weapon_1502b_r", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d", "weapon_1005e" ];
      var WEAPON_L_LIST = [ "weapon_1502b_l", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d" ];
      var GROUND = -200;
      var G = -.6;
      cc.Class({
        extends: cc.Component,
        editor: {
          requireComponent: dragonBones.ArmatureDisplay
        },
        properties: {
          touchHandler: {
            default: null,
            type: cc.Node
          },
          upButton: {
            default: null,
            type: cc.Node
          },
          downButton: {
            default: null,
            type: cc.Node
          },
          leftButton: {
            default: null,
            type: cc.Node
          },
          rightButton: {
            default: null,
            type: cc.Node
          },
          _bullets: [],
          _left: false,
          _right: false,
          _isJumpingA: false,
          _isJumpingB: false,
          _isSquating: false,
          _isAttackingA: false,
          _isAttackingB: false,
          _weaponRIndex: 0,
          _weaponLIndex: 0,
          _faceDir: 1,
          _aimDir: 0,
          _moveDir: 0,
          _aimRadian: 0,
          _speedX: 0,
          _speedY: 0,
          _armature: null,
          _armatureDisplay: null,
          _weaponR: null,
          _weaponL: null,
          _aimState: null,
          _walkState: null,
          _attackState: null,
          _target: cc.p(0, 0)
        },
        onLoad: function onLoad() {
          var _this = this;
          this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
          this._armature = this._armatureDisplay.armature();
          this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this);
          this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this);
          this._armature.getSlot("effects_1").displayController = NORMAL_ANIMATION_GROUP;
          this._armature.getSlot("effects_2").displayController = NORMAL_ANIMATION_GROUP;
          this._weaponR = this._armature.getSlot("weapon_r").childArmature;
          this._weaponL = this._armature.getSlot("weapon_l").childArmature;
          this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          this._updateAnimation();
          dragonBones.WorldClock.clock.add(this._armature);
          if (this.touchHandler) {
            this.touchHandler.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this.attack(true);
            }, this);
            this.touchHandler.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this.attack(false);
            }, this);
            this.touchHandler.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
              var touches = event.getTouches();
              var touchLoc = touches[0].getLocation();
              _this.aim(touchLoc.x, touchLoc.y);
            }, this);
          }
          this.upButton && this.upButton.on(cc.Node.EventType.TOUCH_START, function(event) {
            _this.jump();
          }, this);
          if (this.downButton) {
            this.downButton.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this.squat(true);
            }, this);
            this.downButton.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this.squat(false);
            }, this);
            this.downButton.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
              _this.squat(false);
            }, this);
          }
          if (this.leftButton) {
            this.leftButton.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this._left = true;
              _this._updateMove(-1);
            }, this);
            this.leftButton.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this._left = false;
              _this._updateMove(-1);
            }, this);
            this.leftButton.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
              _this._left = false;
              _this._updateMove(-1);
            }, this);
          }
          if (this.rightButton) {
            this.rightButton.on(cc.Node.EventType.TOUCH_START, function(event) {
              _this._right = true;
              _this._updateMove(1);
            }, this);
            this.rightButton.on(cc.Node.EventType.TOUCH_END, function(event) {
              _this._right = false;
              _this._updateMove(1);
            }, this);
            this.rightButton.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
              _this._right = false;
              _this._updateMove(1);
            }, this);
          }
          cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
              _this._keyHandler(keyCode, true);
            },
            onKeyReleased: function onKeyReleased(keyCode, event) {
              _this._keyHandler(keyCode, false);
            }
          }, this.node);
        },
        _keyHandler: function _keyHandler(keyCode, isDown) {
          switch (keyCode) {
           case cc.KEY.a:
           case cc.KEY.left:
            this._left = isDown;
            this._updateMove(-1);
            break;

           case cc.KEY.d:
           case cc.KEY.right:
            this._right = isDown;
            this._updateMove(1);
            break;

           case cc.KEY.w:
           case cc.KEY.up:
            isDown && this.jump();
            break;

           case cc.KEY.s:
           case cc.KEY.down:
            this.squat(isDown);
            break;

           case cc.KEY.q:
            isDown && this.switchWeaponR();
            break;

           case cc.KEY.e:
            isDown && this.switchWeaponL();
            break;

           case cc.KEY.space:
            if (isDown) {
              this.switchWeaponR();
              this.switchWeaponL();
            }
            break;

           default:
            return;
          }
        },
        _updateMove: function _updateMove(dir) {
          this._left && this._right ? this.move(dir) : this._left ? this.move(-1) : this._right ? this.move(1) : this.move(0);
        },
        move: function move(dir) {
          if (this._moveDir === dir) return;
          this._moveDir = dir;
          this._updateAnimation();
        },
        jump: function jump() {
          if (this._isJumpingA) return;
          this._isJumpingA = true;
          this._armature.animation.fadeIn("jump_1", -1, -1, 0, NORMAL_ANIMATION_GROUP);
          this._walkState = null;
        },
        squat: function squat(isSquating) {
          if (this._isSquating === isSquating) return;
          this._isSquating = isSquating;
          this._updateAnimation();
        },
        attack: function attack(isAttacking) {
          if (this._isAttackingA == isAttacking) return;
          this._isAttackingA = isAttacking;
        },
        switchWeaponL: function switchWeaponL() {
          this._weaponL.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          this._weaponLIndex = (this._weaponLIndex + 1) % WEAPON_L_LIST.length;
          var newWeaponName = WEAPON_L_LIST[this._weaponLIndex];
          this._weaponL = this._armatureDisplay.buildArmature(newWeaponName);
          this._armature.getSlot("weapon_l").childArmature = this._weaponL;
          this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
        },
        switchWeaponR: function switchWeaponR() {
          this._weaponR.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
          this._weaponRIndex = (this._weaponRIndex + 1) % WEAPON_R_LIST.length;
          var newWeaponName = WEAPON_R_LIST[this._weaponRIndex];
          this._weaponR = this._armatureDisplay.buildArmature(newWeaponName);
          this._armature.getSlot("weapon_r").childArmature = this._weaponR;
          this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
        },
        aim: function aim(x, y) {
          0 === this._aimDir && (this._aimDir = 10);
          this._target = this.node.parent.convertToNodeSpaceAR(cc.p(x, y));
        },
        update: function update(dt) {
          this._updatePosition();
          this._updateAim();
          this._updateAttack();
          this._enterFrameHandler(dt);
        },
        onDisable: function onDisable() {
          for (var i = this._bullets.length - 1; i >= 0; i--) {
            var bullet = this._bullets[i];
            bullet.doClean();
          }
          this._bullets = [];
          this._armature && dragonBones.WorldClock.clock.remove(this._armature);
        },
        addBullet: function addBullet(bullet) {
          this._bullets.push(bullet);
        },
        _enterFrameHandler: function _enterFrameHandler(dt) {
          for (var i = this._bullets.length - 1; i >= 0; i--) {
            var bullet = this._bullets[i];
            bullet.update() && this._bullets.splice(i, 1);
          }
          dragonBones.WorldClock.clock.advanceTime(dt);
        },
        _animationEventHandler: function _animationEventHandler(event) {
          if (event.type === dragonBones.EventObject.FADE_IN_COMPLETE) if ("jump_1" === event.detail.animationState.name) {
            this._isJumpingB = true;
            this._speedY = -JUMP_SPEED;
            this._armature.animation.fadeIn("jump_2", -1, -1, 0, NORMAL_ANIMATION_GROUP);
          } else "jump_4" === event.detail.animationState.name && this._updateAnimation(); else if (event.type === dragonBones.EventObject.FADE_OUT_COMPLETE && "attack_01" === event.detail.animationState.name) {
            this._isAttackingB = false;
            this._attackState = null;
          }
        },
        _frameEventHandler: function _frameEventHandler(event) {
          if ("onFire" === event.detail.name) {
            var firePointBone = event.detail.armature.getBone("firePoint");
            var localPoint = cc.p(firePointBone.global.x, -firePointBone.global.y);
            var display = event.detail.armature.display;
            var globalPoint = display.convertToWorldSpace(localPoint);
            this._fire(globalPoint);
          }
        },
        _fire: function _fire(firePoint) {
          firePoint.x += 2 * Math.random() - 1;
          firePoint.y += 2 * Math.random() - 1;
          var armature = this._armatureDisplay.buildArmature("bullet_01");
          var effect = this._armatureDisplay.buildArmature("fireEffect_01");
          var radian = this._faceDir < 0 ? Math.PI - this._aimRadian : this._aimRadian;
          var bullet = new DragonBullet();
          bullet.init(this.node.parent._sgNode, armature, effect, radian + .02 * Math.random() - .01, 40, firePoint);
          this.addBullet(bullet);
        },
        _updateAnimation: function _updateAnimation() {
          if (this._isJumpingA) return;
          if (this._isSquating) {
            this._speedX = 0;
            this._armature.animation.fadeIn("squat", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            this._walkState = null;
            return;
          }
          if (0 === this._moveDir) {
            this._speedX = 0;
            this._armature.animation.fadeIn("idle", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            this._walkState = null;
          } else {
            this._walkState || (this._walkState = this._armature.animation.fadeIn("walk", -1, -1, 0, NORMAL_ANIMATION_GROUP));
            this._moveDir * this._faceDir > 0 ? this._walkState.timeScale = MAX_MOVE_SPEED_FRONT / NORMALIZE_MOVE_SPEED : this._walkState.timeScale = -MAX_MOVE_SPEED_BACK / NORMALIZE_MOVE_SPEED;
            this._moveDir * this._faceDir > 0 ? this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir : this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir;
          }
        },
        _updatePosition: function _updatePosition() {
          if (0 !== this._speedX) {
            this.node.x += this._speedX;
            var minX = -cc.visibleRect.width / 2;
            var maxX = cc.visibleRect.width / 2;
            this.node.x < minX ? this.node.x = minX : this.node.x > maxX && (this.node.x = maxX);
          }
          if (0 != this._speedY) {
            this._speedY > 5 && this._speedY + G <= 5 && this._armature.animation.fadeIn("jump_3", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            this._speedY += G;
            this.node.y += this._speedY;
            if (this.node.y < GROUND) {
              this.node.y = GROUND;
              this._isJumpingA = false;
              this._isJumpingB = false;
              this._speedY = 0;
              this._speedX = 0;
              this._armature.animation.fadeIn("jump_4", -1, -1, 0, NORMAL_ANIMATION_GROUP);
              (this._isSquating || this._moveDir) && this._updateAnimation();
            }
          }
        },
        _updateAim: function _updateAim() {
          if (0 === this._aimDir) return;
          this._faceDir = this._target.x > this.node.x ? 1 : -1;
          if (this.node.scaleX * this._faceDir < 0) {
            this.node.scaleX *= -1;
            this._moveDir && this._updateAnimation();
          }
          var aimOffsetY = this._armature.getBone("chest").global.y * this.node.scaleY;
          if (this._faceDir > 0) this._aimRadian = Math.atan2(-(this._target.y - this.node.y + aimOffsetY), this._target.x - this.node.x); else {
            this._aimRadian = Math.PI - Math.atan2(-(this._target.y - this.node.y + aimOffsetY), this._target.x - this.node.x);
            this._aimRadian > Math.PI && (this._aimRadian -= 2 * Math.PI);
          }
          var aimDir = 0;
          aimDir = this._aimRadian > 0 ? -1 : 1;
          if (this._aimDir != aimDir) {
            this._aimDir = aimDir;
            this._aimDir >= 0 ? this._aimState = this._armature.animation.fadeIn("aimUp", 0, 1, 0, AIM_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup) : this._aimState = this._armature.animation.fadeIn("aimDown", 0, 1, 0, AIM_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);
          }
          this._aimState.weight = Math.abs(this._aimRadian / Math.PI * 2);
          this._armature.invalidUpdate();
        },
        _updateAttack: function _updateAttack() {
          if (!this._isAttackingA || this._isAttackingB) return;
          this._isAttackingB = true;
          this._attackState = this._armature.animation.fadeIn("attack_01", -1, -1, 0, ATTACK_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);
          this._attackState.autoFadeOutTime = this._attackState.fadeTotalTime;
          this._attackState.addBoneMask("pelvis");
        }
      });
      var DragonBullet = cc.Class({
        name: "DragonBullet",
        _speedX: 0,
        _speedY: 0,
        _armature: null,
        _armatureDisplay: null,
        _effect: null,
        init: function init(parentNode, armature, effect, radian, speed, position) {
          this._speedX = Math.cos(radian) * speed;
          this._speedY = -Math.sin(radian) * speed;
          var thePos = parentNode.convertToNodeSpace(position);
          this._armature = armature;
          this._armatureDisplay = this._armature.display;
          this._armatureDisplay.setPosition(thePos);
          this._armatureDisplay.rotation = radian * dragonBones.DragonBones.RADIAN_TO_ANGLE;
          this._armature.animation.play("idle");
          if (effect) {
            this._effect = effect;
            var effectDisplay = this._effect.display;
            effectDisplay.rotation = radian * dragonBones.DragonBones.RADIAN_TO_ANGLE;
            effectDisplay.setPosition(thePos);
            effectDisplay.scaleX = 1 + 1 * Math.random();
            effectDisplay.scaleY = 1 + .5 * Math.random();
            Math.random() < .5 && (effectDisplay.scaleY *= -1);
            this._effect.animation.play("idle");
            dragonBones.WorldClock.clock.add(this._effect);
            parentNode.addChild(effectDisplay);
          }
          dragonBones.WorldClock.clock.add(this._armature);
          parentNode.addChild(this._armatureDisplay);
        },
        update: function update() {
          this._armatureDisplay.x += this._speedX;
          this._armatureDisplay.y += this._speedY;
          var worldPos = this._armatureDisplay.parent.convertToWorldSpace(this._armatureDisplay.getPosition());
          if (worldPos.x < -100 || worldPos.x >= cc.visibleRect.width + 100 || worldPos.y < -100 || worldPos.y >= cc.visibleRect.height + 100) {
            this.doClean();
            return true;
          }
          return false;
        },
        doClean: function doClean() {
          dragonBones.WorldClock.clock.remove(this._armature);
          this._armatureDisplay.removeFromParent();
          this._armature.dispose();
          if (this._effect) {
            dragonBones.WorldClock.clock.remove(this._effect);
            this._effect.display.removeFromParent();
            this._effect.dispose();
          }
        }
      });
    }
    cc._RF.pop();
  }, {} ],
  EditBoxFocus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a7ff6UBHVKV4jTfKY/YtyS", "EditBoxFocus");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editBox1: cc.EditBox,
        editBox2: cc.EditBox,
        editBox3: cc.EditBox
      },
      onLoad: function onLoad() {},
      setFocus: function setFocus(event) {
        var target = event.target;
        "Button1" === target.name ? this.editBox1.setFocus(true) : "Button2" === target.name ? this.editBox2.setFocus(true) : "Button3" === target.name && this.editBox3.setFocus(true);
        this.editBox1.isFocused() && cc.log("Button1 is focused");
        this.editBox2.isFocused() && cc.log("Button2 is focused");
        this.editBox3.isFocused() && cc.log("Button3 is focused");
      }
    });
    cc._RF.pop();
  }, {} ],
  EditboxCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd654DFPoRNVKRWOuQdLiEE", "EditboxCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        singleLineText: {
          default: null,
          type: cc.EditBox
        },
        singleLinePassword: {
          default: null,
          type: cc.EditBox
        },
        multiLineText: {
          default: null,
          type: cc.EditBox
        },
        showEditorBoxLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      singleLineEditBoxDidBeginEditing: function singleLineEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidBeginEditing");
      },
      singleLineEditBoxDidChanged: function singleLineEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line editBoxDidChanged: " + text);
      },
      singleLineEditBoxDidEndEditing: function singleLineEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.singleLineText.string);
      },
      singleLinePasswordEditBoxDidBeginEditing: function singleLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidBeginEditing");
      },
      singleLinePasswordEditBoxDidChanged: function singleLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line password editBoxDidChanged: " + text);
      },
      singleLinePasswordEditBoxDidEndEditing: function singleLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidEndEditing: " + this.singleLinePassword.string);
      },
      multiLinePasswordEditBoxDidBeginEditing: function multiLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidBeginEditing");
      },
      multiLinePasswordEditBoxDidChanged: function multiLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " multi line editBoxDidChanged: " + text);
      },
      multiLinePasswordEditBoxDidEndEditing: function multiLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidEndEditing: " + this.multiLineText.string);
      },
      buttonClicked: function buttonClicked() {
        cc.log("button Clicked!");
        "" !== this.singleLineText.string ? this.showEditorBoxLabel.string = i18n.t("cases/02_ui/07_editBox/editbox.js.1") + this.singleLineText.string : this.showEditorBoxLabel.string = "";
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  FilledSpriteControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50a95ObLqFH2rz6eShvGuNK", "FilledSpriteControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: .1,
        horizontal: {
          default: null,
          type: cc.Sprite
        },
        vertical: {
          default: null,
          type: cc.Sprite
        },
        radial_round: {
          default: null,
          type: cc.Sprite
        },
        radial_semicircle: {
          default: null,
          type: cc.Sprite
        }
      },
      update: function update(dt) {
        this._updataFillStart(this.horizontal, dt);
        this._updataFillStart(this.vertical, dt);
        this._updateFillRange(this.radial_round, 1, dt);
        this._updateFillRange(this.radial_semicircle, .5, dt);
      },
      _updataFillStart: function _updataFillStart(sprite, dt) {
        var fillStart = sprite.fillStart;
        fillStart = fillStart > 0 ? fillStart -= dt * this.speed : 1;
        sprite.fillStart = fillStart;
      },
      _updateFillRange: function _updateFillRange(sprite, range, dt) {
        var fillRange = sprite.fillRange;
        fillRange = fillRange < range ? fillRange += dt * this.speed : 0;
        sprite.fillRange = fillRange;
      }
    });
    cc._RF.pop();
  }, {} ],
  Foo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ea36nYikVOup6BzaEIMYPH", "Foo");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: function properties() {
        return {
          refToBar: require("Bar")
        };
      },
      onLoad: function onLoad() {
        var tip = this.node.children[0].getComponent(cc.Label);
        tip.string = this.name + " has reference to " + this.refToBar.name;
      }
    });
    cc._RF.pop();
  }, {
    Bar: "Bar"
  } ],
  GoldBeatingAnime: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea8108bpl9ErIGOELI2Fezi", "GoldBeatingAnime");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 50,
        gold_label: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.curGold = 0;
        this.curIndex = 0;
      },
      update: function update(dt) {
        this.curIndex += dt * this.speed;
        if (this.curIndex > 10) {
          this.curIndex = 0;
          this.curGold++;
          this.gold_label.string += this.curGold;
          if (this.gold_label.string.length > 10) {
            this.gold_label.string = i18n.t("cases/02_ui/02_label/GoldBeatingAnime.js.1");
            this.curGold = 0;
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  Helpers: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8640M3ozRErrV/Go3uTknt", "Helpers");
    "use strict";
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    module.exports = {
      getRandomInt: getRandomInt
    };
    cc._RF.pop();
  }, {} ],
  HeroControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "339d2dg1QpEKKxBJBzHiDJ0", "HeroControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: cc.v2(0, 0),
        maxSpeed: cc.v2(2e3, 2e3),
        gravity: -1e3,
        drag: 1e3,
        direction: 0,
        jumpSpeed: 300
      },
      onLoad: function onLoad() {
        cc.eventManager.addListener({
          event: cc.EventListener.KEYBOARD,
          onKeyPressed: this.onKeyPressed.bind(this),
          onKeyReleased: this.onKeyReleased.bind(this)
        }, this.node);
        this.collisionX = 0;
        this.collisionY = 0;
        this.prePosition = cc.v2();
        this.preStep = cc.v2();
        this.touchingNumber = 0;
      },
      onEnable: function onEnable() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      },
      onKeyPressed: function onKeyPressed(keyCode, event) {
        switch (keyCode) {
         case cc.KEY.a:
         case cc.KEY.left:
          this.direction = -1;
          break;

         case cc.KEY.d:
         case cc.KEY.right:
          this.direction = 1;
          break;

         case cc.KEY.w:
         case cc.KEY.up:
          if (!this.jumping) {
            this.jumping = true;
            this.speed.y = this.jumpSpeed;
          }
        }
      },
      onKeyReleased: function onKeyReleased(keyCode, event) {
        switch (keyCode) {
         case cc.KEY.a:
         case cc.KEY.left:
         case cc.KEY.d:
         case cc.KEY.right:
          this.direction = 0;
        }
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.color = cc.Color.RED;
        this.touchingNumber++;
        var otherAabb = other.world.aabb;
        var otherPreAabb = other.world.preAabb.clone();
        var selfAabb = self.world.aabb;
        var selfPreAabb = self.world.preAabb.clone();
        selfPreAabb.x = selfAabb.x;
        otherPreAabb.x = otherAabb.x;
        if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
          if (this.speed.x < 0 && selfPreAabb.xMax > otherPreAabb.xMax) {
            this.node.x = otherPreAabb.xMax - this.node.parent.x;
            this.collisionX = -1;
          } else if (this.speed.x > 0 && selfPreAabb.xMin < otherPreAabb.xMin) {
            this.node.x = otherPreAabb.xMin - selfPreAabb.width - this.node.parent.x;
            this.collisionX = 1;
          }
          this.speed.x = 0;
          other.touchingX = true;
          return;
        }
        selfPreAabb.y = selfAabb.y;
        otherPreAabb.y = otherAabb.y;
        if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
          if (this.speed.y < 0 && selfPreAabb.yMax > otherPreAabb.yMax) {
            this.node.y = otherPreAabb.yMax - this.node.parent.y;
            this.jumping = false;
            this.collisionY = -1;
          } else if (this.speed.y > 0 && selfPreAabb.yMin < otherPreAabb.yMin) {
            this.node.y = otherPreAabb.yMin - selfPreAabb.height - this.node.parent.y;
            this.collisionY = 1;
          }
          this.speed.y = 0;
          other.touchingY = true;
        }
      },
      onCollisionStay: function onCollisionStay(other, self) {
        if (-1 === this.collisionY && "Platform" === other.node.group) {
          var motion = other.node.getComponent("PlatformMotion");
          motion && (this.node.x += motion._movedDiff);
        }
      },
      onCollisionExit: function onCollisionExit(other) {
        this.touchingNumber--;
        0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
        if (other.touchingX) {
          this.collisionX = 0;
          other.touchingX = false;
        } else if (other.touchingY) {
          other.touchingY = false;
          this.collisionY = 0;
          this.jumping = true;
        }
      },
      update: function update(dt) {
        if (0 === this.collisionY) {
          this.speed.y += this.gravity * dt;
          Math.abs(this.speed.y) > this.maxSpeed.y && (this.speed.y = this.speed.y > 0 ? this.maxSpeed.y : -this.maxSpeed.y);
        }
        if (0 === this.direction) {
          if (this.speed.x > 0) {
            this.speed.x -= this.drag * dt;
            this.speed.x <= 0 && (this.speed.x = 0);
          } else if (this.speed.x < 0) {
            this.speed.x += this.drag * dt;
            this.speed.x >= 0 && (this.speed.x = 0);
          }
        } else {
          this.speed.x += (this.direction > 0 ? 1 : -1) * this.drag * dt;
          Math.abs(this.speed.x) > this.maxSpeed.x && (this.speed.x = this.speed.x > 0 ? this.maxSpeed.x : -this.maxSpeed.x);
        }
        this.speed.x * this.collisionX > 0 && (this.speed.x = 0);
        this.prePosition.x = this.node.x;
        this.prePosition.y = this.node.y;
        this.preStep.x = this.speed.x * dt;
        this.preStep.y = this.speed.y * dt;
        this.node.x += this.speed.x * dt;
        this.node.y += this.speed.y * dt;
      }
    });
    cc._RF.pop();
  }, {} ],
  Hittest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49ade5wuu9ILKDuwPmdIALx", "Hittest");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        collider: {
          default: null,
          type: cc.PolygonCollider
        },
        title: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        this.title.string = "normal";
        cc.eventManager.addListener({
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          onTouchBegan: function onTouchBegan(touch, event) {
            var touchLoc = touch.getLocation();
            cc.Intersection.pointInPolygon(touchLoc, _this.collider.world.points) ? _this.title.string = "Hit" : _this.title.string = "Not hit";
            return true;
          }
        }, this.node);
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ae4cUsGcBIE4q7Ksp4ZX/H", "InitData");
    "use strict";
    var _monsterInfo = {
      name: "Slime",
      hp: 100,
      lv: 1,
      atk: 10,
      defense: 5,
      imageUrl: "test assets/PurpleMonster"
    };
    module.exports = {
      monsterInfo: _monsterInfo
    };
    cc._RF.pop();
  }, {} ],
  Instruction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a871gy73FDLap3Eje/2h6i", "Instruction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        text: {
          default: "",
          multiline: true
        }
      },
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  Item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "920c8a5MahAhbCTSvmQvaB+", "Item");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        itemID: 0
      },
      onLoad: function onLoad() {
        this.node.on("touchend", function() {
          console.log("Item " + this.itemID + " clicked");
        }, this);
      },
      updateItem: function updateItem(tmplId, itemId) {
        this.itemID = itemId;
        this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + tmplId + " Item#" + this.itemID;
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  LabelLocalized: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4f88adp3hERoJ48DZ2PSAl", "LabelLocalized");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Label,
      properties: {
        textKey: {
          default: "TEXT_KEY",
          multiline: true,
          tooltip: "Enter i18n key here",
          notify: function notify() {
            if (this._sgNode) {
              this._sgNode.setString(this.string);
              this._updateNodeSize();
            }
          }
        },
        string: {
          override: true,
          tooltip: "Here shows the localized string of Text Key",
          get: function get() {
            return i18n.t(this.textKey);
          },
          set: function set(value) {
            this.textKey = value;
            cc.warn("Please set label text key in Text Key property.");
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  LayoutResizeContainerCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2bbedtV3blCVJbmf2E9h/0V", "LayoutResizeContainerCtrl");
    "use strict";
    var info = cc.Class({
      name: "info",
      properties: {
        target: cc.Node,
        num: 0
      }
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        itemTemp: {
          default: null,
          type: cc.Prefab
        },
        targetAry: {
          default: [],
          type: [ info ]
        }
      },
      onLoad: function onLoad() {
        this._curTime = 0;
        this._curIndex = 0;
      },
      _createItem: function _createItem(parentNode, idx) {
        var item = cc.instantiate(this.itemTemp);
        var label = item.getComponentInChildren(cc.Label);
        label.string = idx;
        item.parent = parentNode;
      },
      update: function update(dt) {
        this._curTime += dt;
        if (this._curTime >= 1) {
          this._curTime = 0;
          for (var i = 0; i < this.targetAry.length; ++i) {
            var num = this.targetAry[i].num;
            var target = this.targetAry[i].target;
            target && this._curIndex < num && this._createItem(target, this._curIndex);
          }
          this._curIndex++;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa63bWNE8hBf4P4Sp0X2uT0", "ListItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        url: "",
        bg: cc.Sprite,
        btn: cc.Button
      },
      init: function init(menu) {
        this.index = -1;
        this.menu = menu;
      },
      loadExample: function loadExample() {
        this.url && this.menu.loadScene(this.url);
      },
      updateItem: function updateItem(idx, y, name, url) {
        var isDir = !url;
        this.index = idx;
        this.node.y = y;
        this.node.x = isDir ? 50 : 100;
        this.label.string = name;
        this.url = url;
        this.bg.enabled = !isDir;
        this.btn.interactable = !isDir;
      }
    });
    cc._RF.pop();
  }, {} ],
  ListViewCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6458+hf5VAnIXocmvhggqC", "ListViewCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        itemTemplate: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.ScrollView
        },
        spawnCount: 0,
        totalCount: 0,
        spacing: 0,
        bufferZone: 0,
        lblScrollEvent: cc.Label,
        btnAddItem: cc.Button,
        btnRemoveItem: cc.Button,
        btnJumpToPosition: cc.Button,
        lblJumpPosition: cc.Label,
        lblTotalItems: cc.Label
      },
      onLoad: function onLoad() {
        this.content = this.scrollView.content;
        this.items = [];
        this.initialize();
        this.updateTimer = 0;
        this.updateInterval = .2;
        this.lastContentPosY = 0;
      },
      initialize: function initialize() {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing;
        for (var i = 0; i < this.spawnCount; ++i) {
          var item = cc.instantiate(this.itemTemplate);
          this.content.addChild(item);
          item.setPosition(0, -item.height * (.5 + i) - this.spacing * (i + 1));
          item.getComponent("Item").updateItem(i, i);
          this.items.push(item);
        }
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = this.scrollView.content.y < this.lastContentPosY;
        var offset = (this.itemTemplate.height + this.spacing) * items.length;
        for (var i = 0; i < items.length; ++i) {
          var viewPos = this.getPositionInView(items[i]);
          if (isDown) {
            if (viewPos.y < -buffer && items[i].y + offset < 0) {
              items[i].setPositionY(items[i].y + offset);
              var item = items[i].getComponent("Item");
              var itemId = item.itemID - items.length;
              item.updateItem(i, itemId);
            }
          } else if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
            items[i].setPositionY(items[i].y - offset);
            var _item = items[i].getComponent("Item");
            var _itemId = _item.itemID + items.length;
            _item.updateItem(i, _itemId);
          }
        }
        this.lastContentPosY = this.scrollView.content.y;
        this.lblTotalItems.textKey = "Total Items: " + this.totalCount;
      },
      scrollEvent: function scrollEvent(sender, event) {
        switch (event) {
         case 0:
          this.lblScrollEvent.string = "Scroll to Top";
          break;

         case 1:
          this.lblScrollEvent.string = "Scroll to Bottom";
          break;

         case 2:
          this.lblScrollEvent.string = "Scroll to Left";
          break;

         case 3:
          this.lblScrollEvent.string = "Scroll to Right";
          break;

         case 4:
          this.lblScrollEvent.string = "Scrolling";
          break;

         case 5:
          this.lblScrollEvent.string = "Bounce Top";
          break;

         case 6:
          this.lblScrollEvent.string = "Bounce bottom";
          break;

         case 7:
          this.lblScrollEvent.string = "Bounce left";
          break;

         case 8:
          this.lblScrollEvent.string = "Bounce right";
          break;

         case 9:
          this.lblScrollEvent.string = "Auto scroll ended";
        }
      },
      addItem: function addItem() {
        this.content.height = (this.totalCount + 1) * (this.itemTemplate.height + this.spacing) + this.spacing;
        this.totalCount = this.totalCount + 1;
      },
      removeItem: function removeItem() {
        if (this.totalCount - 1 < 30) {
          cc.error("can't remove item less than 30!");
          return;
        }
        this.content.height = (this.totalCount - 1) * (this.itemTemplate.height + this.spacing) + this.spacing;
        this.totalCount = this.totalCount - 1;
      },
      scrollToFixedPosition: function scrollToFixedPosition() {
        this.scrollView.scrollToOffset(cc.p(0, 500), 2);
      }
    });
    cc._RF.pop();
  }, {} ],
  LoadModuleCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e702GubHpK+4vAb3yu2OW5", "LoadModuleCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        monsterTemp: {
          default: null,
          type: cc.Prefab
        },
        btn_createMonster: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.btn_createMonster.on(cc.Node.EventType.TOUCH_END, this.createMoster.bind(this));
      },
      createMoster: function createMoster() {
        var monster = cc.instantiate(this.monsterTemp);
        var Monster = require("Monster");
        var monsterComp = monster.getComponent(Monster);
        var InitData = require("InitData");
        monsterComp.initInfo(InitData.monsterInfo);
        monster.parent = this.node;
        monster.setPosition(cc.p(0, 0));
        this.btn_createMonster.active = false;
      }
    });
    cc._RF.pop();
  }, {
    InitData: "InitData",
    Monster: "Monster"
  } ],
  LoadRes_example: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7c19DG8M5Dp7vHrQu5a8gK", "LoadRes_example");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        content: cc.Node,
        _url: []
      },
      onLoad: function onLoad() {
        this._url = [ "test assets/atlas", "test assets/prefab" ];
      },
      loadSpriteFrame: function loadSpriteFrame() {
        var _this = this;
        var url = this._url[0];
        this._clearResource(url, cc.SpriteAtlas);
        cc.loader.loadRes(url, cc.SpriteAtlas, function(err, atlas) {
          cc.loader.setAutoRelease(url, true);
          var node = new cc.Node();
          _this.content.addChild(node);
          node.position = cc.v2(0, 0);
          var sprite = node.addComponent(cc.Sprite);
          sprite.spriteFrame = atlas.getSpriteFrame("sheep_run_0");
        });
      },
      loadPrefab: function loadPrefab() {
        var _this2 = this;
        var url = this._url[1];
        this._clearResource(url, cc.Prefab);
        cc.loader.loadRes(url, cc.Prefab, function(err, prefab) {
          cc.loader.setAutoRelease(url, true);
          var node = cc.instantiate(prefab);
          _this2.content.addChild(node);
          node.position = cc.v2(0, 0);
        });
      },
      _clearResource: function _clearResource(url, type) {
        this.content.removeAllChildren(true);
        var res = cc.loader.getRes(url, type);
        cc.loader.release(res);
      }
    });
    cc._RF.pop();
  }, {} ],
  LoadingBarCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "102a9wU40RJd4SnQqQQzQT9", "LoadingBarCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        progressBar: {
          default: null,
          type: cc.ProgressBar
        },
        progressTips: {
          default: null,
          type: cc.Label
        },
        laodBg: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this._urls = [ cc.url.raw("resources/audio/ding.wav"), cc.url.raw("resources/audio/cheering.wav"), cc.url.raw("resources/audio/music_logo.mp3"), cc.url.raw("resources/test assets/audio.mp3"), cc.url.raw("resources/loadingBar/font.png"), cc.url.raw("resources/loadingBar/mikado_outline_shadow.png"), cc.url.raw("resources/loadingBar/enligsh-chinese.png") ];
        this.resource = null;
        this.progressBar.progress = 0;
        this._clearAll();
        this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3");
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          if (this.resource) return;
          cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
        }, this);
      },
      _clearAll: function _clearAll() {
        for (var i = 0; i < this._urls.length; ++i) {
          var url = this._urls[i];
          cc.loader.release(url);
        }
      },
      _progressCallback: function _progressCallback(completedCount, totalCount, res) {
        this.progress = completedCount / totalCount;
        this.resource = res;
        this.completedCount = completedCount;
        this.totalCount = totalCount;
      },
      _completeCallback: function _completeCallback(error, res) {},
      update: function update(dt) {
        if (!this.resource) return;
        var progress = this.progressBar.progress;
        if (progress >= 1) {
          this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1");
          this.laodBg.active = false;
          this.progressBar.node.active = false;
          this.enabled = false;
          return;
        }
        progress < this.progress && (progress += dt);
        this.progressBar.progress = progress;
        this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2") + this.resource.id + " (" + this.completedCount + "/" + this.totalCount + ")";
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  MaskCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c324aDRcOtM1oTGYSemsKTY", "MaskCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mask: cc.Mask,
        slider: cc.Slider,
        label: cc.Label
      },
      onLoad: function onLoad() {
        this.slider.progress = this.mask.alphaThreshold;
      },
      update: function update(dt) {
        if (cc._renderType !== cc.game.RENDER_TYPE_WEBGL && true) return;
        this.mask.alphaThreshold = this.slider.progress;
        this.label.string = this.slider.progress.toFixed(1);
      }
    });
    cc._RF.pop();
  }, {} ],
  Menu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04525pyYBlN26SWawaUF3dA", "Menu");
    "use strict";
    var i18n = require("i18n");
    var SceneList = require("SceneList");
    cc.Class({
      extends: cc.Component,
      properties: {
        text: {
          default: null,
          type: cc.Label
        },
        readme: {
          default: null,
          type: cc.ScrollView
        },
        btnInfo: {
          default: null,
          type: cc.Button
        },
        btnBack: {
          default: null,
          type: cc.Button
        },
        testList: {
          default: null,
          type: cc.ScrollView
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this._isLoadingScene = false;
        this.showDebugDraw = false;
        cc.game.addPersistRootNode(this.node);
        this.currentSceneUrl = "TestList.fire";
        this.contentPos = null;
        this.isMenu = true;
        this.btnBack.node.active = false;
        this.loadInstruction(this.currentSceneUrl);
        this.node.zIndex = 999;
        cc.game.addPersistRootNode(this.testList.node);
        if (this.testList && this.testList.content) {
          this.sceneList = this.testList.content.getComponent("SceneList");
          this.sceneList.init(this);
        }
        "undefined" !== typeof cocosAnalytics && cocosAnalytics.CAEvent.onEvent({
          eventName: "打开范例"
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event) {
          event.keyCode === cc.KEY.b && _this.backToList();
        }, this);
        this._updateInfoButton();
      },
      backToList: function backToList() {
        if (this._isLoadingScene) return;
        this._isLoadingScene = true;
        this.showReadme(null, false);
        this.currentSceneUrl = "TestList.fire";
        this.isMenu = true;
        cc.director.loadScene("TestList", this.onLoadSceneFinish.bind(this));
      },
      loadScene: function loadScene(url) {
        this._isLoadingScene = true;
        this.contentPos = this.testList.getContentPosition();
        this.currentSceneUrl = url;
        this.isMenu = false;
        this.testList.node.active = false;
        cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
        "undefined" !== typeof cocosAnalytics && cocosAnalytics.CALevels.begin({
          level: url
        });
      },
      onLoadSceneFinish: function onLoadSceneFinish() {
        var url = this.currentSceneUrl;
        this.loadInstruction(url);
        if (this.isMenu && this.contentPos) {
          this.btnBack.node.active = false;
          this.testList.node.active = true;
          this.testList.setContentPosition(this.contentPos);
        } else {
          this.btnBack.node.active = true;
          this.testList.node.active = false;
        }
        this._isLoadingScene = false;
      },
      loadInstruction: function loadInstruction(url) {
      },
      _updateInfoButton: function _updateInfoButton() {
        var labelTxt = i18n.t("scripts/Global/Menu.js." + (this.readme.node.active ? "view" : "hide") + ".info");
        cc.find("label", this.btnInfo.node).getComponent(cc.Label).textKey = labelTxt;
      },
      showReadme: function showReadme(event, active) {
        this.readme.node.active = void 0 === active ? !this.readme.node.active : active;
        this.readme.node.active && this.readme.scrollToTop();
        this._updateInfoButton();
        var enabledDebugDraw = cc.director.getCollisionManager().enabledDebugDraw;
        if (this.readme.node.active) {
          this.showDebugDraw = enabledDebugDraw;
          cc.director.getCollisionManager().enabledDebugDraw = false;
        } else cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
        var videoPlayer = cc.find("Canvas/VideoPlayer");
        videoPlayer && (videoPlayer.active = !this.readme.node.active);
      },
      restart: function restart() {
        cc.game.restart();
      },
      gc: function gc() {
        cc.sys.garbageCollect();
      }
    });
    cc._RF.pop();
  }, {
    SceneList: "SceneList",
    i18n: "i18n"
  } ],
  Metrics: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41101qjzitCvK4UjOFtlCUe", "Metrics");
    "use strict";
    "undefined" !== typeof cocosAnalytics && cocosAnalytics.init({
      appID: "13798",
      appSecret: "959b3ac0037d0f3c2fdce94f8421a9b2",
      channel: "000000",
      version: "1.6.2"
    });
    cc._RF.pop();
  }, {} ],
  MonsterPrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cb4dm2QEpJ7pnaS/cjrvgF", "MonsterPrefab");
    "use strict";
    var Helpers = require("Helpers");
    cc.Class({
      extends: cc.Component,
      properties: {
        spriteList: {
          default: [],
          type: [ cc.SpriteFrame ]
        }
      },
      onLoad: function onLoad() {
        var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
        var sprite = this.getComponent(cc.Sprite);
        sprite.spriteFrame = this.spriteList[randomIdx];
      }
    });
    cc._RF.pop();
  }, {
    Helpers: "Helpers"
  } ],
  Monster: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e31b0+PoDRJXIDHFxy60vEs", "Monster");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nickname: {
          default: null,
          type: cc.Label
        },
        lv: {
          default: null,
          type: cc.Label
        },
        hp: {
          default: null,
          type: cc.Label
        },
        atk: {
          default: null,
          type: cc.Label
        },
        defense: {
          default: null,
          type: cc.Label
        },
        image: {
          default: null,
          type: cc.Sprite
        }
      },
      initInfo: function initInfo(info) {
        this.nickname.string = info.name;
        this.lv.string = info.lv;
        this.hp.string = info.hp;
        this.atk.string = info.atk;
        this.defense.string = info.defense;
        var image = this.image;
        cc.loader.loadRes(info.imageUrl, cc.SpriteFrame, function(error, spriteFrame) {
          error || (image.spriteFrame = spriteFrame);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  MotionStreakCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7722zlKP5HoKMY5VvWPCON", "MotionStreakCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        motionStreak: cc.MotionStreak,
        newTexture: cc.Texture2D
      },
      onLoad: function onLoad() {
        this._changed = true;
        this.oldTexture = this.motionStreak.texture;
      },
      onClick: function onClick() {
        this._changed ? this.setMotionStreak(2, 3, 20, this.newTexture) : this.setMotionStreak(.5, 1, 30, this.oldTexture);
        this._changed = !this._changed;
      },
      setMotionStreak: function setMotionStreak(fadeTime, minSeg, stroke, texture) {
        this.motionStreak.fadeTime = fadeTime;
        this.motionStreak.minSeg = minSeg;
        this.motionStreak.stroke = stroke;
        this.motionStreak.texture = texture;
      }
    });
    cc._RF.pop();
  }, {} ],
  MouseDragger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2412ev9NSRMeI28JHH2OS8r", "MouseDragger");
    "use strict";
    var TouchDragger = cc.Class({
      extends: cc.Component,
      properties: {
        propagate: {
          default: false
        }
      },
      onLoad: function onLoad() {
        this._down = false;
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
          cc.log("Drag stated ...");
          this.node.opacity = 255;
          this._down = true;
          this.propagate || event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, function(event) {
          if (!this._down) {
            event.stopPropagation();
            return;
          }
          this.node.opacity = 255;
          var delta = event.getDelta();
          this.node.x += delta.x;
          this.node.y += delta.y;
          this.propagate || event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
          if (!this._down) {
            event.stopPropagation();
            return;
          }
          this.node.opacity = 160;
          cc.log("Drag leave ...");
          this._down = false;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function() {
          if (!this._down) {
            event.stopPropagation();
            return;
          }
          cc.log("Drag done ...");
          this.node.opacity = 160;
          this._down = false;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  MouseEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6df0ft1jy5Jg4cQ039jt8jC", "MouseEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      move: function move(event) {
        this.node.x += event.getDeltaX();
        this.node.y += event.getDeltaY();
      },
      onLoad: function onLoad() {
        this.scroll = 0;
        this.node.opacity = 50;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
          this.node.opacity = 255;
          this.node.on(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
          this.node.opacity = 160;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
          this.node.opacity = 50;
          this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function() {
          this.node.opacity = 50;
          this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
          this._callback && this._callback();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function(event) {
          this.scroll += event.getScrollY();
          var h = this.node.height;
          this.scroll = cc.clampf(this.scroll, -2 * h, .7 * h);
          this.node.scale = 1 - this.scroll / h;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  MoveAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ddd4eaLxVZFlZbzaPaqdL9D", "MoveAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        moveTo: cc.Node,
        moveBy: cc.Node
      },
      onLoad: function onLoad() {
        var moveTo = cc.moveTo(.5, cc.p(0, 0));
        var moveBy = cc.moveBy(.5, cc.p(100, 100));
        this.moveTo.runAction(moveTo);
        this.moveBy.runAction(moveBy);
      }
    });
    cc._RF.pop();
  }, {} ],
  MoveAnimationCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dc95dq3mVI658br0l2Zbi0", "MoveAnimationCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: {
          default: null,
          type: cc.Animation
        },
        nodes: {
          default: [],
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.onRegisteredEvent();
      },
      onRegisteredEvent: function onRegisteredEvent() {
        for (var i = 0; i < this.nodes.length; ++i) this.nodes[i].on(cc.Node.EventType.TOUCH_END, this.onPlayAnimation.bind(this));
      },
      onPlayAnimation: function onPlayAnimation(event) {
        this.target.stop();
        switch (event.target._name) {
         case "Linear":
          this.target.play("linear");
          break;

         case "CaseIn_Expo":
          this.target.play("caseIn-expo");
          break;

         case "CaseOut_Expo":
          this.target.play("caseOut-expo");
          break;

         case "CaseInOut_Expo":
          this.target.play("caseInOut-expo");
          break;

         case "Back_Forward":
          this.target.play("back-forward");
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  MyCustomComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b8baEpLuxACIMNlIL2vw2W", "MyCustomComponent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        power: 10
      },
      getPower: function getPower() {
        return this.power;
      }
    });
    cc._RF.pop();
  }, {} ],
  NetworkCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10908h1aHRPPowxQQzUCVMD", "NetworkCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        xhr: cc.Label,
        xhrAB: cc.Label,
        xhrTimeout: cc.Label,
        websocket: cc.Label,
        socketIO: cc.Label,
        xhrResp: cc.Label,
        xhrABResp: cc.Label,
        xhrTimeoutResp: cc.Label,
        websocketResp: cc.Label,
        socketIOResp: cc.Label
      },
      onLoad: function onLoad() {
        this._wsiSendBinary = null;
        this.xhrResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.1");
        this.xhrABResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.2");
        this.xhrTimeoutResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.2");
        this.websocketResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.3");
        this.socketIOResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.4");
        this.sendXHR();
        this.sendXHRAB();
        this.sendXHRTimeout();
        this.prepareWebSocket();
        this.sendSocketIO();
      },
      sendXHR: function sendXHR() {
        var xhr = cc.loader.getXMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhr, this.xhrResp, "GET");
        xhr.open("GET", "https://httpbin.org/get?show_env=1", true);
        cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        xhr.timeout = 5e3;
        xhr.send();
      },
      sendXHRAB: function sendXHRAB() {
        var xhr = cc.loader.getXMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhrAB, this.xhrABResp, "POST");
        xhr.open("POST", "https://httpbin.org/post");
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.send(new Uint8Array([ 1, 2, 3, 4, 5 ]));
      },
      sendXHRTimeout: function sendXHRTimeout() {
        var xhr = new XMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhrTimeout, this.xhrTimeoutResp, "GET");
        xhr.open("GET", "https://192.168.22.222", true);
        xhr.timeout = 5e3;
        xhr.send();
      },
      prepareWebSocket: function prepareWebSocket() {
        var self = this;
        var websocketLabel = this.websocket;
        var respLabel = this.websocketResp;
        this._wsiSendBinary = new WebSocket("ws://echo.websocket.org");
        this._wsiSendBinary.binaryType = "arraybuffer";
        this._wsiSendBinary.onopen = function(evt) {
          websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.5");
        };
        this._wsiSendBinary.onmessage = function(evt) {
          var binary = new Uint16Array(evt.data);
          var binaryStr = "response bin msg: ";
          var str = "";
          for (var i = 0; i < binary.length; i++) if (0 === binary[i]) str += "'\\0'"; else {
            var hexChar = "0x" + binary[i].toString("16").toUpperCase();
            str += String.fromCharCode(hexChar);
          }
          binaryStr += str;
          respLabel.string = binaryStr;
          websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.6");
        };
        this._wsiSendBinary.onerror = function(evt) {
          websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.7");
        };
        this._wsiSendBinary.onclose = function(evt) {
          websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.8");
          self._wsiSendBinary = null;
        };
        this.scheduleOnce(this.sendWebSocketBinary, 1);
      },
      sendWebSocketBinary: function sendWebSocketBinary(sender) {
        if (!this._wsiSendBinary) return;
        if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
          this.websocket.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.9");
          var buf = "Hello WebSocket中文,\0 I'm\0 a\0 binary\0 message\0.";
          var arrData = new Uint16Array(buf.length);
          for (var i = 0; i < buf.length; i++) arrData[i] = buf.charCodeAt(i);
          this._wsiSendBinary.send(arrData.buffer);
        } else {
          var warningStr = "send binary websocket instance wasn't ready...";
          this.websocket.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.10") + warningStr;
          this.scheduleOnce(function() {
            this.sendWebSocketBinary();
          }, 1);
        }
      },
      testevent: function testevent(data) {
        if (!this.socketIO) return;
        var msg = this.tag + " says 'testevent' with data: " + data;
        this.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.11") + msg;
      },
      message: function message(data) {
        if (!this.socketIO) return;
        var msg = this.tag + " received message: " + data;
        this.socketIOResp.string = msg;
      },
      disconnection: function disconnection() {
        if (!this.socketIO) return;
        var msg = this.tag + " disconnected!";
        this.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.12") + msg;
      },
      sendSocketIO: function sendSocketIO() {
        var self = this;
        if ("undefined" === typeof io) {
          cc.error("You should import the socket.io.js as a plugin!");
          return;
        }
        var sioclient = io.connect("ws://tools.itharbors.com:4000", {
          "force new connection": true
        });
        this._sioClient = sioclient;
        this.tag = sioclient.tag = "Test Client";
        sioclient.on("connect", function() {
          if (!self.socketIO) return;
          var msg = sioclient.tag + " Connected!";
          self.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.13") + msg;
          self._sioClient.send("Hello Socket.IO!");
        });
        sioclient.on("message", this.message.bind(this));
        sioclient.on("echotest", function(data) {
          if (!self.socketIO) return;
          cc.log("echotest 'on' callback fired!");
          var msg = self.tag + " says 'echotest' with data: " + data;
          self.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.14") + msg;
        });
        sioclient.on("testevent", this.testevent.bind(this));
        sioclient.on("disconnect", this.disconnection.bind(this));
      },
      streamXHREventsToLabel: function streamXHREventsToLabel(xhr, eventLabel, label, method, responseHandler) {
        var handler = responseHandler || function(response) {
          return method + " Response (30 chars): " + response.substring(0, 30) + "...";
        };
        var eventLabelOrigin = eventLabel.string;
        [ "loadstart", "abort", "error", "load", "loadend", "timeout" ].forEach(function(eventname) {
          xhr["on" + eventname] = function() {
            eventLabel.string = eventLabelOrigin + "\nEvent : " + eventname;
          };
        });
        xhr.onreadystatechange = function() {
          4 === xhr.readyState && xhr.status >= 200 && xhr.status < 300 && (label.string = handler(xhr.responseText));
        };
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  NodeGenerator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2149G/5j1JIKd2GGzQfS72", "NodeGenerator");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        prefab: cc.Prefab,
        hint: cc.Label,
        regionOrigin: cc.Vec2,
        regionSize: cc.Size
      },
      onLoad: function onLoad() {
        this.schedule(this.generateNode, 2);
        this._pool = new cc.NodePool("PoolHandler");
        this._count = 0;
      },
      generateNode: function generateNode() {
        var monster = this._pool.get();
        if (!monster) {
          monster = cc.instantiate(this.prefab);
          this._count++;
          this.hint.string = "Node Created: " + this._count;
          monster.addComponent("PoolHandler");
        }
        monster.x = this.regionOrigin.x + Math.floor(Math.random() * this.regionSize.width);
        monster.y = this.regionOrigin.y + Math.floor(Math.random() * this.regionSize.height);
        var angle = Math.random() * Math.PI * 2;
        var dx = 500 * Math.cos(angle);
        var dy = 500 * Math.sin(angle);
        monster.runAction(cc.sequence(cc.moveBy(5, dx, dy), cc.callFunc(this.removeNode, this, monster)));
        this.node.addChild(monster);
      },
      removeNode: function removeNode(sender, monster) {
        this._pool.put(monster);
      }
    });
    cc._RF.pop();
  }, {} ],
  NodeGroupControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd4a2+britAlof0UdMCVB8c", "NodeGroupControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nodeList: {
          default: [],
          type: [ cc.Node ]
        }
      },
      onLoad: function onLoad() {
        var self = this;
        this.inervalId = setInterval(function() {
          self.toggleNodesVisibility();
        }, 1e3);
      },
      onDestroy: function onDestroy() {
        clearInterval(this.inervalId);
      },
      toggleNodesVisibility: function toggleNodesVisibility() {
        console.log("toggle visibility");
        for (var i = 0; i < this.nodeList.length; ++i) this.nodeList[i].active = !this.nodeList[i].active;
      }
    });
    cc._RF.pop();
  }, {} ],
  NonSerializedProperties: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4114PgybhJ3L/k0N9TkCZI", "NonSerializedProperties");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mySerializedText: "",
        myNonSerializedText: {
          default: "",
          visible: false
        },
        label1: {
          default: null,
          type: cc.Label
        },
        label2: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.myNonSerializedText = "Can only set value in script";
        this.label1.string = this.mySerializedText;
        this.label2.string = this.myNonSerializedText;
      }
    });
    cc._RF.pop();
  }, {} ],
  OnMultiTouchCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53fc1wMwRRPOYCB8ko36drD", "OnMultiTouchCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        canvas: cc.Node,
        target: cc.Node
      },
      onLoad: function onLoad() {
        var self = this, parent = this.node.parent;
        self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var touches = event.getTouches();
          if (touches.length >= 2) {
            var touch1 = touches[0], touch2 = touches[1];
            var delta1 = touch1.getDelta(), delta2 = touch2.getDelta();
            var touchPoint1 = parent.convertToNodeSpaceAR(touch1.getLocation());
            var touchPoint2 = parent.convertToNodeSpaceAR(touch2.getLocation());
            var distance = cc.pSub(touchPoint1, touchPoint2);
            var delta = cc.pSub(delta1, delta2);
            var scale = 1;
            scale = Math.abs(distance.x) > Math.abs(distance.y) ? (distance.x + delta.x) / distance.x * self.target.scale : (distance.y + delta.y) / distance.y * self.target.scale;
            self.target.scale = scale < .1 ? .1 : scale;
          }
        }, self.node);
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  OnTouchCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9b352jbGtMIqjEuud60Wpx", "OnTouchCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        canvas: cc.Node,
        touchLocationDisplay: {
          default: null,
          type: cc.Label
        },
        follower: {
          default: null,
          type: cc.Node
        },
        followSpeed: 200
      },
      onLoad: function onLoad() {
        var self = this;
        self.moveToPos = cc.p(0, 0);
        self.isMoving = false;
        self.canvas.on(cc.Node.EventType.TOUCH_START, function(event) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          self.isMoving = true;
          self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
          self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ", " + Math.floor(touchLoc.y) + ")";
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
          self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ", " + Math.floor(touchLoc.y) + ")";
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_END, function(event) {
          self.isMoving = false;
        }, self.node);
      },
      update: function update(dt) {
        if (!this.isMoving) return;
        var oldPos = this.follower.position;
        var direction = cc.pNormalize(cc.pSub(this.moveToPos, oldPos));
        var newPos = cc.pAdd(oldPos, cc.pMult(direction, this.followSpeed * dt));
        this.follower.setPosition(newPos);
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  OrderSwitcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "385fbE9eghB1IwH34WHGHmk", "OrderSwitcher");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        container: cc.Node
      },
      switch: function _switch() {
        var children = this.container.children;
        var length = children.length;
        if (length > 1) {
          var src = Math.floor(Math.random() * length);
          var node = children[src];
          var dst = src === length - 1 ? 0 : src + 1;
          node.setSiblingIndex(dst);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  PageViewCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "becf9ZpBi5KG43ard9opUPT", "PageViewCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        curNum: 3,
        curTotal: 10,
        pageTeample: cc.Prefab,
        target: cc.PageView,
        label: cc.Label
      },
      _createPage: function _createPage() {
        var page = cc.instantiate(this.pageTeample);
        page.position = new cc.p(0, 0);
        var color = new cc.Color();
        color.r = Math.floor(255 * Math.random());
        color.g = Math.floor(255 * Math.random());
        color.b = Math.floor(255 * Math.random());
        page.color = color;
        return page;
      },
      onLoad: function onLoad() {
        this.target.setCurrentPageIndex(0);
      },
      update: function update() {
        this.label.string = "第" + (this.target.getCurrentPageIndex() + 1) + "页";
      },
      onJumpHome: function onJumpHome() {
        this.target.scrollToPage(0);
      },
      plusPage: function plusPage(callback) {
        if (this.curNum > this.curTotal) return;
        this.curNum++;
        callback && callback();
      },
      lessPageNum: function lessPageNum(callback) {
        if (this.curNum <= 0) return;
        this.curNum--;
        callback && callback();
      },
      onAddPage: function onAddPage() {
        var _this = this;
        this.plusPage(function() {
          _this.target.addPage(_this._createPage());
        });
      },
      onInsertPage: function onInsertPage() {
        var _this2 = this;
        this.plusPage(function() {
          _this2.target.insertPage(_this2._createPage(), _this2.target.getCurrentPageIndex());
        });
      },
      onRemovePage: function onRemovePage() {
        var _this3 = this;
        this.lessPageNum(function() {
          var pages = _this3.target.getPages();
          _this3.target.removePage(pages[pages.length - 1]);
        });
      },
      onRemovePageAtIndex: function onRemovePageAtIndex() {
        var _this4 = this;
        this.lessPageNum(function() {
          _this4.target.removePageAtIndex(_this4.target.getCurrentPageIndex());
        });
      },
      onRemoveAllPage: function onRemoveAllPage() {
        this.target.removeAllPages();
        this.curNum = 0;
      },
      onPageEvent: function onPageEvent(sender, eventType) {
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) return;
        console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
      }
    });
    cc._RF.pop();
  }, {} ],
  ParticleControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79ae3hiP+JAhIKehaWyiKuh", "ParticleControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        particle: cc.Node
      },
      toggleParticlePlay: function toggleParticlePlay() {
        var myParticle = this.particle.getComponent(cc.ParticleSystem);
        myParticle.particleCount > 0 ? myParticle.stopSystem() : myParticle.resetSystem();
      }
    });
    cc._RF.pop();
  }, {} ],
  PlatformMotion: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f761EZmKhNLKJpUXTrb4fF", "PlatformMotion");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 10,
        distance: 200
      },
      onLoad: function onLoad() {
        this._movedDistance = this.distance / 2;
        this._direction = 1;
        this._movedDiff = 0;
      },
      update: function update(dt) {
        var d = this.speed * this._direction * dt;
        var movedDistance = this._movedDistance + Math.abs(d);
        this._movedDistance += Math.abs(d);
        if (movedDistance > this.distance) {
          d = this.distance - this._movedDistance;
          this._movedDistance = 0;
          this._direction *= -1;
        } else this._movedDistance = movedDistance;
        this.node.x += d;
        this._movedDiff = d;
      }
    });
    cc._RF.pop();
  }, {} ],
  PoolHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea9ac+t92JFY6hOUuiIHUAT", "PoolHandler");
    "use strict";
    var lastClick = 0;
    function pauseresume() {
      var now = Date.now();
      if (now - lastClick < 300) {
        this.stopAllActions();
        var pool = this.getComponent("PoolHandler")._pool;
        pool ? pool.put(this) : this.removeFromParent(true);
      } else {
        this.paused ? cc.director.getActionManager().resumeTarget(this) : cc.director.getActionManager().pauseTarget(this);
        this.paused = !this.paused;
      }
      lastClick = now;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        _pool: null
      },
      onLoad: function onLoad() {
        this.reuse();
      },
      unuse: function unuse() {
        this.node.off(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
      },
      reuse: function reuse() {
        this.node.paused = false;
        this.node.on(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  PopulatePrefab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75518I0ImJHXqWNNGRIOmJg", "PopulatePrefab");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        root: {
          default: null,
          type: cc.Node
        },
        prefab: {
          default: null,
          type: cc.Prefab
        },
        canvas: {
          default: null,
          type: cc.Canvas
        },
        numberToSpawn: 0,
        spawnInterval: 0
      },
      addSpawn: function addSpawn() {
        if (this.spawnCount >= this.numberToSpawn) {
          this.clearRepeater();
          return;
        }
        var monster = cc.instantiate(this.prefab);
        monster.parent = this.root;
        monster.position = this.getRandomPosition();
        this.spawnCount++;
      },
      onLoad: function onLoad() {
        var self = this;
        self.randomRange = cc.p(300, 200);
        self.spawnCount = 0;
        self.schedule(self.addSpawn, self.spawnInterval);
      },
      getRandomPosition: function getRandomPosition() {
        return cc.p(cc.randomMinus1To1() * this.randomRange.x, cc.randomMinus1To1() * this.randomRange.y);
      },
      clearRepeater: function clearRepeater() {
        this.unschedule(this.addSpawn);
      }
    });
    cc._RF.pop();
  }, {} ],
  ProgressBarCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84a43yb9OxBX6HMQxPzHQyz", "ProgressBarCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 10,
        horizontalBar: {
          type: cc.ProgressBar,
          default: null
        },
        horizontalBarReverse: {
          type: cc.ProgressBar,
          default: null
        },
        verticalBar: {
          type: cc.ProgressBar,
          default: null
        },
        verticalBarReverse: {
          type: cc.ProgressBar,
          default: null
        }
      },
      onLoad: function onLoad() {
        this._pingpong = true;
        this.verticalBar.progress = 0;
        this.horizontalBar.progress = 0;
        this.verticalBarReverse.progress = 0;
        this.horizontalBarReverse.progress = 0;
      },
      update: function update(dt) {
        this._updateProgressBar(this.verticalBar, dt);
        this._updateProgressBar(this.horizontalBar, dt);
        this._updateProgressBar(this.verticalBarReverse, dt);
        this._updateProgressBar(this.horizontalBarReverse, dt);
      },
      _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        var progress = progressBar.progress;
        if (progress < 1 && this._pingpong) progress += dt * this.speed; else {
          progress -= dt * this.speed;
          this._pingpong = progress <= 0;
        }
        progressBar.progress = progress;
      }
    });
    cc._RF.pop();
  }, {} ],
  Puzzle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6289cZl6zJEcLVQd60JnAzW", "Puzzle");
    "use strict";
    var MoveDirection = cc.Enum({
      NONE: 0,
      UP: 1,
      DOWN: 2,
      LEFT: 3,
      RIGHT: 4
    });
    var minTilesCount = 2;
    var mapMoveStep = 1;
    var minMoveValue = 50;
    cc.Class({
      extends: cc.Component,
      editor: {
        requireComponent: cc.TiledMap
      },
      properties: {
        _touchStartPos: {
          default: null,
          serializable: false
        },
        _touching: {
          default: false,
          serializable: false
        },
        _isMapLoaded: {
          default: false,
          serializable: false
        },
        floorLayerName: {
          default: "floor"
        },
        barrierLayerName: {
          default: "barrier"
        },
        objectGroupName: {
          default: "players"
        },
        startObjectName: {
          default: "SpawnPoint"
        },
        successObjectName: {
          default: "SuccessPoint"
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this._player = this.node.getChildByName("player");
        this._isMapLoaded || (this._player.active = false);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyPressed, this);
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          _this._touching = true;
          _this._touchStartPos = event.touch.getLocation();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (!_this._touching || !_this._isMapLoaded || _this._succeedLayer.active) return;
          _this._touching = false;
          var touchPos = event.touch.getLocation();
          var movedX = touchPos.x - _this._touchStartPos.x;
          var movedY = touchPos.y - _this._touchStartPos.y;
          var movedXValue = Math.abs(movedX);
          var movedYValue = Math.abs(movedY);
          if (movedXValue < minMoveValue && movedYValue < minMoveValue) return;
          var newTile = cc.p(_this._curTile.x, _this._curTile.y);
          var mapMoveDir = MoveDirection.NONE;
          if (movedXValue >= movedYValue) if (movedX > 0) {
            newTile.x += 1;
            mapMoveDir = MoveDirection.LEFT;
          } else {
            newTile.x -= 1;
            mapMoveDir = MoveDirection.RIGHT;
          } else if (movedY > 0) {
            newTile.y -= 1;
            mapMoveDir = MoveDirection.DOWN;
          } else {
            newTile.y += 1;
            mapMoveDir = MoveDirection.UP;
          }
          _this._tryMoveToNewTile(newTile, mapMoveDir);
        });
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this._onKeyPressed, this);
      },
      restartGame: function restartGame() {
        this._succeedLayer.active = false;
        this._initMapPos();
        this._curTile = this._startTile;
        this._updatePlayerPos();
      },
      start: function start(err) {
        if (err) return;
        this._initMapPos();
        this._succeedLayer = this.node.getParent().getChildByName("succeedLayer");
        this._succeedLayer.active = false;
        this._tiledMap = this.node.getComponent("cc.TiledMap");
        var objectGroup = this._tiledMap.getObjectGroup(this.objectGroupName);
        if (!objectGroup) return;
        var startObj = objectGroup.getObject(this.startObjectName);
        var endObj = objectGroup.getObject(this.successObjectName);
        if (!startObj || !endObj) return;
        var startPos = cc.p(startObj.sgNode.x, startObj.sgNode.y);
        var endPos = cc.p(endObj.sgNode.x, endObj.sgNode.y);
        this._layerFloor = this._tiledMap.getLayer(this.floorLayerName);
        this._layerBarrier = this._tiledMap.getLayer(this.barrierLayerName);
        if (!this._layerFloor || !this._layerBarrier) return;
        this._curTile = this._startTile = this._getTilePos(startPos);
        this._endTile = this._getTilePos(endPos);
        if (this._player) {
          this._updatePlayerPos();
          this._player.active = true;
        }
        this._isMapLoaded = true;
      },
      _initMapPos: function _initMapPos() {
        this.node.setPosition(cc.visibleRect.bottomLeft);
      },
      _updatePlayerPos: function _updatePlayerPos() {
        var pos = this._layerFloor.getPositionAt(this._curTile);
        this._player.setPosition(pos);
      },
      _getTilePos: function _getTilePos(posInPixel) {
        var mapSize = this.node.getContentSize();
        var tileSize = this._tiledMap.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);
        return cc.p(x, y);
      },
      _onKeyPressed: function _onKeyPressed(event) {
        if (!this._isMapLoaded || this._succeedLayer.active) return;
        var newTile = cc.p(this._curTile.x, this._curTile.y);
        var mapMoveDir = MoveDirection.NONE;
        switch (event.keyCode) {
         case cc.KEY.up:
          newTile.y -= 1;
          mapMoveDir = MoveDirection.DOWN;
          break;

         case cc.KEY.down:
          newTile.y += 1;
          mapMoveDir = MoveDirection.UP;
          break;

         case cc.KEY.left:
          newTile.x -= 1;
          mapMoveDir = MoveDirection.RIGHT;
          break;

         case cc.KEY.right:
          newTile.x += 1;
          mapMoveDir = MoveDirection.LEFT;
          break;

         default:
          return;
        }
        this._tryMoveToNewTile(newTile, mapMoveDir);
      },
      _tryMoveToNewTile: function _tryMoveToNewTile(newTile, mapMoveDir) {
        var mapSize = this._tiledMap.getMapSize();
        if (newTile.x < 0 || newTile.x >= mapSize.width) return;
        if (newTile.y < 0 || newTile.y >= mapSize.height) return;
        if (this._layerBarrier.getTileGIDAt(newTile)) {
          cc.log("This way is blocked!");
          return false;
        }
        this._curTile = newTile;
        this._updatePlayerPos();
        this._tryMoveMap(mapMoveDir);
        if (cc.pointEqualToPoint(this._curTile, this._endTile)) {
          cc.log("succeed");
          this._succeedLayer.active = true;
        }
      },
      _tryMoveMap: function _tryMoveMap(moveDir) {
        var mapContentSize = this.node.getContentSize();
        var mapPos = this.node.getPosition();
        var playerPos = this._player.getPosition();
        var viewSize = cc.size(cc.visibleRect.width, cc.visibleRect.height);
        var tileSize = this._tiledMap.getTileSize();
        var minDisX = minTilesCount * tileSize.width;
        var minDisY = minTilesCount * tileSize.height;
        var disX = playerPos.x + mapPos.x;
        var disY = playerPos.y + mapPos.y;
        var newPos;
        switch (moveDir) {
         case MoveDirection.UP:
          disY < minDisY && (newPos = cc.p(mapPos.x, mapPos.y + tileSize.height * mapMoveStep));
          break;

         case MoveDirection.DOWN:
          viewSize.height - disY - tileSize.height < minDisY && (newPos = cc.p(mapPos.x, mapPos.y - tileSize.height * mapMoveStep));
          break;

         case MoveDirection.LEFT:
          viewSize.width - disX - tileSize.width < minDisX && (newPos = cc.p(mapPos.x - tileSize.width * mapMoveStep, mapPos.y));
          break;

         case MoveDirection.RIGHT:
          disX < minDisX && (newPos = cc.p(mapPos.x + tileSize.width * mapMoveStep, mapPos.y));
          break;

         default:
          return;
        }
        if (newPos) {
          var minX = viewSize.width - mapContentSize.width - cc.visibleRect.left;
          var maxX = cc.visibleRect.left.x;
          var minY = viewSize.height - mapContentSize.height - cc.visibleRect.bottom;
          var maxY = cc.visibleRect.bottom.y;
          newPos.x < minX && (newPos.x = minX);
          newPos.x > maxX && (newPos.x = maxX);
          newPos.y < minY && (newPos.y = minY);
          newPos.y > maxY && (newPos.y = maxY);
          if (!cc.pointEqualToPoint(newPos, mapPos)) {
            cc.log("Move the map to new position: ", newPos);
            this.node.setPosition(newPos);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ReferenceTypeProperties: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9341f3fDdBMjJLKh4D+kJJK", "ReferenceTypeProperties");
    "use strict";
    var MyCustomComponent = require("MyCustomComponent");
    cc.Class({
      extends: cc.Component,
      properties: {
        myNode: {
          default: null,
          type: cc.Node
        },
        mySprite: {
          default: null,
          type: cc.Sprite
        },
        myLabel: {
          default: null,
          type: cc.Label
        },
        myComponent: {
          default: null,
          type: MyCustomComponent
        },
        mySpriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        myAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        myPrefab: {
          default: null,
          type: cc.Prefab
        },
        myAudioClip: {
          default: null,
          url: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        this.myLabel.string = this.myComponent.getPower().toString();
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    MyCustomComponent: "MyCustomComponent"
  } ],
  RepeatAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66d74aG3cdDq4lLyUUjOCk/", "RepeatAction");
    "use strict";
    var MAX_VALUE = 5;
    var TIPS_STR = "repeat count: " + MAX_VALUE + " / value";
    cc.Class({
      extends: cc.Component,
      properties: {
        tips: cc.Label
      },
      onLoad: function onLoad() {
        var _this = this;
        this.setTips(0);
        var count = 0;
        var action1 = cc.delayTime(1);
        var action2 = cc.callFunc(function() {
          count++;
          _this.setTips(count);
        }, this);
        this.node.runAction(cc.repeat(cc.sequence(action1, action2), 5));
      },
      setTips: function setTips(count) {
        this.tips.string = TIPS_STR.replace(/value/, count);
      }
    });
    cc._RF.pop();
  }, {} ],
  RichTextEvents: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0c7fwrZUpN7JS8x9rEtSfl", "RichTextEvents");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        logMessage: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      clickme: function clickme(event) {
        var clickPosition = event.touch.getLocation();
        this.logMessage.string = "Clicked at: " + parseFloat(clickPosition.x.toFixed()) + ", y = " + parseFloat(clickPosition.y.toFixed(2));
      }
    });
    cc._RF.pop();
  }, {} ],
  RotationCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "325ba8DYO5K6Yfgi5UmP4+L", "RotationCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rotationToNode: cc.Node,
        rotateByNode: cc.Node
      },
      onToClick: function onToClick() {
        var rotationTo = cc.rotateTo(1, 0, 100);
        this.rotationToNode.runAction(rotationTo);
      },
      onReverseToClick: function onReverseToClick() {
        var rotationTo = cc.rotateTo(1, 100, 0);
        this.rotationToNode.runAction(rotationTo);
      },
      onToRecoverClick: function onToRecoverClick() {
        this.rotationToNode.rotationX = 0;
        this.rotationToNode.rotationY = 0;
      },
      onByClick: function onByClick() {
        var rotateBy = cc.rotateBy(1, 0, 100);
        this.rotateByNode.runAction(rotateBy);
      },
      onReverseByClick: function onReverseByClick() {
        var rotateBy = cc.rotateBy(1, 100, 100);
        this.rotateByNode.runAction(rotateBy);
      },
      onByRecoverClick: function onByRecoverClick() {
        this.rotateByNode.rotationX = 0;
        this.rotateByNode.rotationY = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  RuntimeLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5530cLc2wJFVpWkBxALC33G", "RuntimeLabel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var isRuntime = "undefined" !== typeof runtime;
        isRuntime || (this.node.active = false);
      }
    });
    cc._RF.pop();
  }, {} ],
  SceneList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "473b8wxs55OsJvoxVdYCzTF", "SceneList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        itemPrefab: {
          default: null,
          type: cc.Prefab
        },
        initItemCount: 0,
        scrollView: cc.ScrollView,
        bufferZone: 0
      },
      createItem: function createItem(x, y, name, url) {
        var item = cc.instantiate(this.itemPrefab);
        var itemComp = item.getComponent("ListItem");
        var label = itemComp.label;
        label.string = name;
        url && (itemComp.url = url);
        item.x = x;
        item.y = y;
        this.node.addChild(item);
        return item;
      },
      init: function init(menu) {
        this.menu = menu;
        this.sceneList = [];
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = .2;
        this.lastContentPosY = 0;
        this.initList();
      },
      initList: function initList() {
        var scenes = cc.game._sceneInfos;
        var dict = {};
        if (scenes) {
          var i, j;
          for (i = 0; i < scenes.length; ++i) {
            var url = scenes[i].url;
            var dirname = cc.path.dirname(url).replace("db://assets/cases/", "");
            if ("db://assets/resources/test assets" === dirname) continue;
            var scenename = cc.path.basename(url, ".fire");
            if ("TestList" === scenename) continue;
            dirname || (dirname = "_root");
            dict[dirname] || (dict[dirname] = {});
            dict[dirname][scenename] = url;
          }
        } else cc.log("failed to get scene list!");
        var dirs = Object.keys(dict);
        dirs.sort();
        for (var _i = 0; _i < dirs.length; ++_i) {
          this.sceneList.push({
            name: dirs[_i],
            url: null
          });
          var scenenames = Object.keys(dict[dirs[_i]]);
          scenenames.sort();
          for (var _j = 0; _j < scenenames.length; ++_j) {
            var name = scenenames[_j];
            this.sceneList.push({
              name: name,
              url: dict[dirs[_i]][name]
            });
          }
        }
        var y = 0;
        this.node.height = 50 * (this.sceneList.length + 1);
        for (var _i2 = 0; _i2 < this.initItemCount; ++_i2) {
          var item = cc.instantiate(this.itemPrefab).getComponent("ListItem");
          var itemInfo = this.sceneList[_i2];
          item.init(this.menu);
          this.node.addChild(item.node);
          y -= 50;
          item.updateItem(_i2, y, itemInfo.name, itemInfo.url);
          this.itemList.push(item);
        }
      },
      getPositionInView: function getPositionInView(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var items = this.itemList;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY;
        var curItemCount = this.itemList.length;
        var offset = 50 * curItemCount;
        for (var i = 0; i < curItemCount; ++i) {
          var item = items[i];
          var itemNode = item.node;
          var viewPos = this.getPositionInView(itemNode);
          if (isDown) {
            if (viewPos.y < -buffer && itemNode.y + offset < 0) {
              var newIdx = item.index - curItemCount;
              var newInfo = this.sceneList[newIdx];
              item.updateItem(newIdx, itemNode.y + offset, newInfo.name, newInfo.url);
            }
          } else if (viewPos.y > buffer && itemNode.y - offset > -this.node.height) {
            var _newIdx = item.index + curItemCount;
            var _newInfo = this.sceneList[_newIdx];
            item.updateItem(_newIdx, itemNode.y - offset, _newInfo.name, _newInfo.url);
          }
        }
        this.lastContentPosY = this.node.y;
      }
    });
    cc._RF.pop();
  }, {} ],
  SheepAnimationCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae6fcR8cuFGRYHW525VJD/k", "SheepAnimationCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sheepAnim: {
          default: null,
          type: cc.Animation
        }
      },
      onLoad: function onLoad() {
        var anim = this.sheepAnim;
        this._playAnimCallback = function() {
          anim.play("sheep_jump");
        };
        this.scheduleOnce(this._playAnimCallback, 2);
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  Shooter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "092a3wYF7pBULdP9SLwGUBQ", "Shooter");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bullet: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
      },
      onTouchBegan: function onTouchBegan(event) {
        var scene = cc.director.getScene();
        var touchLoc = event.touch.getLocation();
        var bullet = cc.instantiate(this.bullet);
        bullet.position = touchLoc;
        bullet.active = true;
        scene.addChild(bullet);
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  ShowCollider: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a6dfRzhTBMp5U3il8DJmBZ", "ShowCollider");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onBtnClick: function onBtnClick(event) {
        var target = event.target;
        var shapeClassName = "cc." + target.name + "Collider";
        var nodePath = "Canvas/root/" + target.parent.name;
        var collider = cc.find(nodePath).getComponent(shapeClassName);
        collider.enabled = !collider.enabled;
        var label = target.getChildByName("Label").getComponent(cc.Label);
        collider.enabled ? label.string = label.string.replace("Show", "Hide") : label.string = label.string.replace("Hide", "Show");
      }
    });
    cc._RF.pop();
  }, {} ],
  SimpleAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6067a1+J5FW4G30nmVLU/d", "SimpleAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        jumper: {
          default: null,
          type: cc.Node
        },
        colorNode: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.squashAction = cc.scaleTo(.2, 1, .6);
        this.stretchAction = cc.scaleTo(.2, 1, 1.2);
        this.scaleBackAction = cc.scaleTo(.1, 1, 1);
        this.moveUpAction = cc.moveBy(1, cc.p(0, 200)).easing(cc.easeCubicActionOut());
        this.moveDownAction = cc.moveBy(1, cc.p(0, -200)).easing(cc.easeCubicActionIn());
        var seq = cc.sequence(this.squashAction, this.stretchAction, this.moveUpAction, this.scaleBackAction, this.moveDownAction, this.squashAction, this.scaleBackAction, cc.callFunc(this.callback.bind(this)));
        this.jumper.runAction(seq);
        this.colorNode.runAction(cc.sequence(cc.tintTo(2, 255, 0, 0), cc.delayTime(.5), cc.fadeOut(1), cc.delayTime(.5), cc.fadeIn(1), cc.delayTime(.5), cc.tintTo(2, 255, 255, 255)).repeat(2));
      },
      callback: function callback() {
        this.node.removeFromParent();
      }
    });
    cc._RF.pop();
  }, {} ],
  SimpleButtonCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68675KwfElAdaumPl1byNh7", "SimpleButtonCtrl");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        buttonLeft: cc.Button,
        buttonRight: cc.Button,
        display: cc.Label
      },
      onBtnLeftClicked: function onBtnLeftClicked() {
        console.log("Left button clicked!");
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.1");
      },
      onBtnRightClicked: function onBtnRightClicked() {
        console.log("Right button clicked!");
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.2");
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  SimpleKeyboardMovement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3f971iyCdIh6xdaO49XP0F", "SimpleKeyboardMovement");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sheep: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.turnRight();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
         case cc.KEY.a:
         case cc.KEY.left:
          console.log("turn left");
          this.turnLeft();
          break;

         case cc.KEY.d:
         case cc.KEY.right:
          console.log("turn right");
          this.turnRight();
        }
      },
      update: function update(dt) {
        this.sheep.x += this.speed * dt;
      },
      turnLeft: function turnLeft() {
        this.speed = -100;
        this.sheep.scaleX = 1;
      },
      turnRight: function turnRight() {
        this.speed = 100;
        this.sheep.scaleX = -1;
      }
    });
    cc._RF.pop();
  }, {} ],
  SimpleMotion: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fde33rWt81MvZWO7QQ3jv3j", "SimpleMotion");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        moveSpeed: 100,
        rotationSpeed: 90
      },
      onLoad: function onLoad() {},
      update: function update(dt) {
        this.node.x += dt * this.moveSpeed;
        this.node.rotation += dt * this.rotationSpeed;
      }
    });
    cc._RF.pop();
  }, {} ],
  SingletonCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcfefvjPgdGEKnfOwuoIVJD", "SingletonCtrl");
    "use strict";
    var Singleton = require("Singleton");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        var node = new cc.Node("Monster");
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = Singleton.instance.monsterIcon;
        node.parent = this.node;
      }
    });
    cc._RF.pop();
  }, {
    Singleton: "Singleton"
  } ],
  Singleton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "379d2K4GUtCv7pB9+wuz4Lb", "Singleton");
    "use strict";
    var Singleton = cc.Class({
      extends: cc.Component,
      properties: {
        monsterIcon: {
          default: null,
          type: cc.SpriteFrame
        }
      },
      statics: {
        instance: null
      },
      onLoad: function onLoad() {
        Singleton.instance = this;
      }
    });
    cc._RF.pop();
  }, {} ],
  SliderCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "051d5Epx65ARZ9itjsuO9NL", "SliderCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        image: cc.Node,
        music: cc.AudioSource,
        slider_h: cc.Slider,
        slider_v: cc.Slider
      },
      onLoad: function onLoad() {
        this.slider_v.progress = .5;
        this.slider_h.progress = .5;
        this._updateImageOpacity(this.slider_v.progress);
        this._updateMusicVolume(this.slider_h.progress);
      },
      _updateImageOpacity: function _updateImageOpacity(progress) {
        this.image.opacity = 255 * progress;
      },
      _updateMusicVolume: function _updateMusicVolume(progress) {
        this.music.volume = progress;
      },
      onSliderVEvent: function onSliderVEvent(sender, eventType) {
        this._updateImageOpacity(sender.progress);
      },
      onSliderHEvent: function onSliderHEvent(sender, eventType) {
        this._updateMusicVolume(sender.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  SpineCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91115OWZ9hJkIXaqCNRUsZC", "SpineCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        requireComponent: sp.Skeleton
      },
      properties: {
        mixTime: .2
      },
      onLoad: function onLoad() {
        var _this = this;
        var spine = this.spine = this.getComponent("sp.Skeleton");
        this._setMix("walk", "run");
        this._setMix("run", "jump");
        this._setMix("walk", "jump");
        spine.setStartListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] start.", trackEntry.trackIndex, animationName);
        });
        spine.setInterruptListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] interrupt.", trackEntry.trackIndex, animationName);
        });
        spine.setEndListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] end.", trackEntry.trackIndex, animationName);
        });
        spine.setDisposeListener(function(trackEntry) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] will be disposed.", trackEntry.trackIndex, animationName);
        });
        spine.setCompleteListener(function(trackEntry, loopCount) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          "shoot" === animationName && _this.spine.clearTrack(1);
          cc.log("[track %s][animation %s] complete: %s", trackEntry.trackIndex, animationName, loopCount);
        });
        spine.setEventListener(function(trackEntry, event) {
          var animationName = trackEntry.animation ? trackEntry.animation.name : "";
          cc.log("[track %s][animation %s] event: %s, %s, %s, %s", trackEntry.trackIndex, animationName, event.data.name, event.intValue, event.floatValue, event.stringValue);
        });
        this._hasStop = false;
      },
      toggleDebugSlots: function toggleDebugSlots() {
        this.spine.debugSlots = !this.spine.debugSlots;
      },
      toggleDebugBones: function toggleDebugBones() {
        this.spine.debugBones = !this.spine.debugBones;
      },
      toggleTimeScale: function toggleTimeScale() {
        1 === this.spine.timeScale ? this.spine.timeScale = .3 : this.spine.timeScale = 1;
      },
      stop: function stop() {
        this.spine.clearTrack(0);
        this._hasStop = true;
      },
      walk: function walk() {
        this.spine.setAnimation(0, "walk", true);
        this._hasStop = false;
      },
      run: function run() {
        this.spine.setAnimation(0, "run", true);
        this._hasStop = false;
      },
      jump: function jump() {
        var oldAnim = this.spine.animation;
        this.spine.setAnimation(0, "jump", false);
        oldAnim && !this._hasStop && this.spine.addAnimation(0, "run" === oldAnim ? "run" : "walk", true, 0);
      },
      shoot: function shoot() {
        this.spine.setAnimation(1, "shoot", false);
      },
      _setMix: function _setMix(anim1, anim2) {
        this.spine.setMix(anim1, anim2, this.mixTime);
        this.spine.setMix(anim2, anim1, this.mixTime);
      }
    });
    cc._RF.pop();
  }, {} ],
  Switcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41a1bujgpVH7IZ1HSDQEosG", "Switcher");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        prefab: cc.Prefab
      },
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          var newnode = cc.instantiate(this.prefab);
          var parent = this.node.parent;
          this.node.parent = null;
          newnode.parent = parent;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  TagColliderListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc2a1tfAtlEWoLmkfLbgQS3", "TagColliderListener");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        }
      },
      onEnable: function onEnable() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
      },
      onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.label.string = "Collision on tag : " + self.tag;
      }
    });
    cc._RF.pop();
  }, {} ],
  TiledSpriteControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6941HLrIVFLokuMTS8HSUo", "TiledSpriteControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 100,
        progressBar: {
          default: null,
          type: cc.Node
        },
        ground: {
          default: null,
          type: cc.Node
        }
      },
      update: function update(dt) {
        this._updateWdith(this.progressBar, 500, dt);
        this._updateWdith(this.ground, 1e3, dt);
      },
      _updateWdith: function _updateWdith(node, range, dt) {
        var width = node.width;
        width = width < range ? width += dt * this.speed : 0;
        node.width = width;
      }
    });
    cc._RF.pop();
  }, {} ],
  TipsManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c9bezFtu5AHZUcydh+6QJj", "TipsManager");
    "use strict";
    var i18n = require("i18n");
    var PlatformType = cc.Enum({
      None: 0,
      Native: 1,
      Native_Desktop: 2,
      Mobile: 10,
      Mobile_Android: 11,
      Runtime: 20,
      WebGl: 30,
      Canvas: 31,
      Native_Browser_Chrome: 100
    });
    var canvas = null;
    cc.Class({
      extends: cc.Component,
      properties: {
        support: false,
        platform: {
          default: PlatformType.Node,
          type: PlatformType
        }
      },
      onLoad: function onLoad() {
        this._showTips();
      },
      _checkNonSupport: function _checkNonSupport() {
        var showed = false, textKey = "";
        switch (this.platform) {
         case PlatformType.Native_Desktop:
          showed = cc.sys.isNative && (cc.sys.platform === cc.sys.WIN32 || cc.sys.platform === cc.sys.MACOS);
          textKey = i18n.t("example_case_nonsupport_native_desktop_tips");
          break;

         case PlatformType.Mobile:
          showed = cc.sys.isMobile;
          textKey = i18n.t("example_case_nonsupport_mobile_tips");
          break;

         case PlatformType.Runtime:
          showed = cc.runtime;
          textKey = i18n.t("example_case_nonsupport_runtime_tips");
          break;

         case PlatformType.Canvas:
          showed = cc._renderType === cc.game.RENDER_TYPE_CANVAS;
          textKey = i18n.t("example_case_nonsupport_web_canvas_tips");
        }
        return {
          showed: showed,
          textKey: textKey
        };
      },
      _checkSupport: function _checkSupport() {
        var showed = false, textKey = "";
        switch (this.platform) {
         case PlatformType.Mobile:
          showed = !cc.sys.isMobile || cc.runtime;
          textKey = i18n.t("example_case_support_mobile_tips");
          break;

         case PlatformType.WebGl:
          showed = cc._renderType !== cc.game.RENDER_TYPE_WEBGL;
          textKey = i18n.t("example_case_support_webGl_tips");
          break;

         case PlatformType.Mobile_Android:
          showed = !(cc.sys.isMobile && cc.sys.platform === cc.sys.ANDROID) || cc.runtime;
          textKey = i18n.t("example_case_support_mobile_android_tips");
          break;

         case PlatformType.Native_Browser_Chrome:
          showed = !(!cc.sys.isMobile && cc.sys.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_CHROME);
          textKey = i18n.t("example_case_support_native_chrome_tips");
        }
        return {
          showed: showed,
          textKey: textKey
        };
      },
      _showTips: function _showTips() {
        if (this.platform === PlatformType.None) return;
        var info = this.support ? this._checkSupport() : this._checkNonSupport();
        var bg = this.node.getComponent(cc.Sprite);
        bg.enabled = info.showed;
        if (info.showed) {
          var content = this.node.getChildByName("Content").getComponent(cc.Label);
          content.textKey = info.textKey;
        }
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  TouchDragger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95021X5KjxP369OONe316sH", "TouchDragger");
    "use strict";
    var TouchDragger = cc.Class({
      extends: cc.Component,
      properties: {
        propagate: {
          default: false
        }
      },
      onLoad: function onLoad() {
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          cc.log("Drag stated ...");
          this.opacity = 255;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          this.opacity = 255;
          var delta = event.touch.getDelta();
          this.x += delta.x;
          this.y += delta.y;
          this.getComponent(TouchDragger).propagate && event.stopPropagation();
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          this.opacity = 160;
        }, this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  TouchEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a14bfaD+gRJKrTVjKwitc53", "TouchEvent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      _callback: null,
      onLoad: function onLoad() {
        this.node.opacity = 100;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          this.node.opacity = 255;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          this.node.opacity = 100;
          this._callback && this._callback();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
          this.node.opacity = 100;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  ValueTypeProperties: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9bf6bFb+tF779stLEmjzTV", "ValueTypeProperties");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        myNumber: {
          default: 0,
          type: cc.Integer
        },
        myString: {
          default: "default text"
        },
        myVec2: {
          default: cc.Vec2.ZERO
        },
        myColor: {
          default: cc.Color.WHITE
        },
        myOtherNumber: 0,
        myOtherString: "no type definition",
        myOtherVec2: cc.Vec2.ONE,
        myOtherColor: cc.Color.BLACK
      },
      onLoad: function onLoad() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  Wall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a279oXNoxFFI516fswAbVo", "Wall");
    "use strict";
    var WallType = cc.Enum({
      Left: 0,
      Right: 1,
      Top: 2,
      Bottom: 3
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        type: {
          default: WallType.Left,
          type: WallType
        },
        width: 5
      },
      start: function start() {
        var collider = this.getComponent(cc.BoxCollider);
        if (!collider) return;
        var node = this.node;
        var type = this.type;
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        var wallWidth = this.width;
        if (type === WallType.Left) {
          node.height = height;
          node.width = wallWidth;
          node.x = 0;
          node.y = height / 2;
        } else if (type === WallType.Right) {
          node.height = height;
          node.width = wallWidth;
          node.x = width;
          node.y = height / 2;
        } else if (type === WallType.Top) {
          node.width = width;
          node.height = wallWidth;
          node.x = width / 2;
          node.y = height;
        } else if (type === WallType.Bottom) {
          node.width = width;
          node.height = wallWidth;
          node.x = width / 2;
          node.y = 0;
        }
        collider.size = node.getContentSize();
      }
    });
    cc._RF.pop();
  }, {} ],
  WebviewCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8de1gmPM1CLoiv+P/T9HnJ", "WebviewCtrl");
    "use strict";
    var TipsManager = require("TipsManager");
    cc.Class({
      extends: cc.Component,
      properties: {
        labelStatus: cc.Label,
        webview: cc.WebView,
        url: cc.EditBox
      },
      onWebFinishLoad: function onWebFinishLoad(sender, event) {
        var loadStatus = "";
        event === cc.WebView.EventType.LOADED ? loadStatus = " is loaded!" : event === cc.WebView.EventType.LOADING ? loadStatus = " is loading!" : event === cc.WebView.EventType.ERROR && (loadStatus = " load error!");
        this.labelStatus.string = this.url.string + loadStatus;
      },
      visitURL: function visitURL() {
        this.webview.url = this.url.string;
      }
    });
    cc._RF.pop();
  }, {
    TipsManager: "TipsManager"
  } ],
  arc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a556aaUmwpNjJWPRek7CPtI", "arc");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.WHITE);
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 5;
        g.fillColor = cc.hexToColor("#ff0000");
        g.arc(0, 0, 100, Math.PI / 2, Math.PI, false);
        g.lineTo(0, 0);
        g.close();
        g.stroke();
        g.fill();
        g.fillColor = cc.hexToColor("#00ff00");
        g.arc(-10, 10, 100, Math.PI / 2, Math.PI, true);
        g.lineTo(-10, 10);
        g.close();
        g.stroke();
        g.fill();
      },
      onDisable: function onDisable() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.BLACK);
      }
    });
    cc._RF.pop();
  }, {} ],
  cullingGraphics: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3081auq1etNe7L63zfmGbi5", "cullingGraphics");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        var g = this.getComponent(cc.Graphics);
        if (g) {
          g.lineWidth = 10;
          g.fillColor = cc.hexToColor("#ff0000");
          g.moveTo(-20, 0);
          g.lineTo(0, -100);
          g.lineTo(20, 0);
          g.lineTo(0, 100);
          g.close();
          g.stroke();
          g.fill();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  culling: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e29ctzt8tATYngmvZr8CAF", "culling");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        buttons: [ cc.Node ],
        cameraNode: {
          default: null,
          type: cc.Node
        },
        cameraButtonLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.cameraButtonLabel.node.parent.active = cc._renderType !== cc.game.RENDER_TYPE_CANVAS;
        cc.director.setDisplayStats(true);
        var g = this.getComponent(cc.Graphics);
        if (g) {
          g.lineWidth = 10;
          g.fillColor = cc.hexToColor("#ff0000");
          g.moveTo(-20, 0);
          g.lineTo(0, -100);
          g.lineTo(20, 0);
          g.lineTo(0, 100);
          g.close();
          g.stroke();
          g.fill();
        }
      },
      spawnGameObject: function spawnGameObject(event, data) {
        cc.log("data : = " + data);
        var node = this.buttons[0 | data];
        node.runAction(cc.sequence(cc.moveBy(3, cc.p(1200, 0)), cc.moveBy(3, cc.p(-1200, 0))));
      },
      onDestroy: function onDestroy() {
        cc.director.setDisplayStats(false);
      },
      changeCamera: function changeCamera() {
        if (this.cameraNode.active) {
          this.cameraNode.active = false;
          this.cameraButtonLabel.string = "Enable Camera";
        } else {
          this.cameraNode.active = true;
          this.cameraButtonLabel.string = "Disable Camera";
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  doodle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "136e6rUnNlCbZ7UezYhQDoQ", "doodle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        reactivity: .5,
        debug: false
      },
      onLoad: function onLoad() {
        var _this = this;
        cc.director.setClearColor && cc.director.setClearColor(cc.hexToColor("#d1f1ff"));
        this.graphics = this.getComponent(cc.Graphics);
        this.nodes = [];
        this.ripples = [];
        this.mouse = {
          x: 0,
          y: 0
        };
        this.color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
        this.cycle = 90;
        this.createBezierNodes();
        cc.eventManager.addListener({
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          onTouchBegan: function onTouchBegan(touch, event) {
            _this.mouse = touch.getLocation();
            _this.addRipple();
            return true;
          },
          onTouchEnded: function onTouchEnded() {
            _this.input = false;
          }
        }, this.node);
      },
      onDisable: function onDisable() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.BLACK);
      },
      createBezierNodes: function createBezierNodes() {
        this.updateColorCycle();
        for (var quantity = 0, len = 6; quantity < len; quantity++) {
          var theta = 2 * Math.PI * quantity / len;
          var x = .5 * cc.winSize.width + 0 * Math.cos(theta);
          var y = .5 * cc.winSize.height + 0 * Math.sin(theta);
          this.nodes.push({
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            lastX: x,
            lastY: y,
            min: 150,
            max: 250,
            disturb: 150,
            orbit: 20,
            angle: Math.random() * Math.PI * 2,
            speed: .05 + .05 * Math.random(),
            theta: theta
          });
        }
      },
      addRipple: function addRipple() {
        this.input = true;
        if (0 === this.ripples.length) {
          this.updateColorCycle();
          this.ripples.push({
            x: this.mouse.x,
            y: this.mouse.y,
            reactivity: 0,
            fade: 1
          });
        }
      },
      updateColorCycle: function updateColorCycle() {
        this.cycle = 100 !== Math.min(this.cycle + this.reactivity + .3, 100) ? this.cycle += this.reactivity + .3 : 0;
        var color = this.color;
        color.r = ~~(127 * Math.sin(.3 * this.cycle + 0) + 128);
        color.g = ~~(127 * Math.sin(.3 * this.cycle + 2) + 128);
        color.b = ~~(127 * Math.sin(.3 * this.cycle + 4) + 128);
      },
      update: function update(dt) {
        var _this2 = this;
        var nodes = this.nodes;
        var ripples = this.ripples;
        var ease = .01, friction = .98;
        for (var index = 0; index < ripples.length; index++) {
          var ripple = ripples[index];
          ripple.reactivity += 5;
          ripple.fade -= .05;
          ripple.fade <= 0 && ripples.splice(index, 1);
        }
        [].forEach.call(nodes, function(node, index) {
          node.lastX += .08 * (.5 * cc.winSize.width + node.disturb * Math.cos(node.theta) - node.lastX);
          node.lastY += .08 * (.5 * cc.winSize.height + node.disturb * Math.sin(node.theta) - node.lastY);
          node.x += .08 * (node.lastX + Math.cos(node.angle) * node.orbit - node.x);
          node.y += .08 * (node.lastY + Math.sin(node.angle) * node.orbit - node.y);
          node.vx += (node.min - node.disturb) * ease;
          node.vx *= friction;
          node.disturb += node.vx;
          _this2.input && (node.disturb += (node.max - node.disturb) * _this2.reactivity);
          node.angle += node.speed;
        });
        this.render();
      },
      render: function render() {
        var _this3 = this;
        var nodes = this.nodes;
        var ripples = this.ripples;
        var graphics = this.graphics;
        var color = this.color;
        var currentIndex, nextIndex, xc, yc;
        color.a = this.debug ? 255 : 127.5;
        graphics.clear();
        [].forEach.call(nodes, function(node, index) {
          currentIndex = nodes[nodes.length - 1];
          nextIndex = nodes[0];
          xc = currentIndex.x + .5 * (nextIndex.x - currentIndex.x);
          yc = currentIndex.y + .5 * (nextIndex.y - currentIndex.y);
          var strokeColor = cc.hexToColor(_this3.debug ? "#a9a9a9" : "#e5e5e5");
          strokeColor.a = _this3.debug ? 255 : 127.5;
          graphics.strokeColor = strokeColor;
          graphics.fillColor = color;
          graphics.lineWidth = _this3.debug ? 1 : 5;
          graphics.moveTo(xc, yc);
          for (var N = 0; N < nodes.length; N++) {
            currentIndex = nodes[N];
            nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
            xc = currentIndex.x + .5 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .5 * (nextIndex.y - currentIndex.y);
            graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
          }
          _this3.debug ? null : graphics.fill();
          graphics.stroke();
          graphics.lineWidth = 1;
          graphics.lineCap = cc.Graphics.LineCap.ROUND;
          graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
          graphics.strokeColor = cc.hexToColor("#a9a9a9");
          graphics.fillColor = cc.hexToColor("#a9a9a9");
          for (var N = 0; N < nodes.length; N++) {
            currentIndex = nodes[N];
            nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
            xc = currentIndex.x + .8 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .8 * (nextIndex.y - currentIndex.y);
            graphics.moveTo(xc, yc);
            currentIndex = nextIndex;
            nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
            xc = currentIndex.x + .2 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .2 * (nextIndex.y - currentIndex.y);
            graphics.lineTo(xc, yc);
            graphics.stroke();
            currentIndex = nodes[N];
            nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
            xc = currentIndex.x + .8 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .8 * (nextIndex.y - currentIndex.y);
            graphics.circle(xc, yc, 2);
            graphics.fill();
            currentIndex = nextIndex;
            nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
            xc = currentIndex.x + .2 * (nextIndex.x - currentIndex.x);
            yc = currentIndex.y + .2 * (nextIndex.y - currentIndex.y);
            graphics.circle(xc, yc, 2);
            graphics.fill();
          }
        });
        for (var index = 0; index < ripples.length; index++) {
          var ripple = ripples[index];
          var fillColor = cc.hexToColor("#ffffff");
          fillColor.a = 255 * ripple.fade;
          graphics.fillColor = fillColor;
          graphics.circle(ripple.x, ripple.y, ripple.reactivity);
          graphics.fill();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  "dynamic-tiledmap": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cad2cnE69BPqr+Aejz96TlC", "dynamic-tiledmap");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var url = "tilemap/tile_iso_offset";
        this.onLoadTileMap(url);
      },
      onLoadTileMap: function onLoadTileMap(url) {
        var _this = this;
        cc.loader.loadRes(url, cc.TiledMapAsset, function(err, tmxAsset) {
          if (err) {
            cc.error(err);
            return;
          }
          _this.onCreateTileMap(tmxAsset);
        });
      },
      onCreateTileMap: function onCreateTileMap(tmxAsset) {
        var node = new cc.Node();
        this.node.addChild(node);
        var tileMap = node.addComponent(cc.TiledMap);
        tileMap.tmxAsset = tmxAsset;
      }
    });
    cc._RF.pop();
  }, {} ],
  ellipse: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7e65GQDltH+6fpuWTVubaZ", "ellipse");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.WHITE);
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.fillColor = cc.hexToColor("#ff0000");
        g.circle(150, 0, 100);
        g.ellipse(-150, 0, 100, 70);
        g.stroke();
        g.fill();
      },
      onDisable: function onDisable() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.BLACK);
      }
    });
    cc._RF.pop();
  }, {} ],
  en: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "920c5VLzJxKjYCAoIUwUHym", "en");
    "use strict";
    module.exports = {
      example_case_nonsupport_native_desktop_tips: "The example case nonsupport the Mac platform and Windows platform",
      example_case_nonsupport_runtime_tips: "The example case does not support the runtime platform",
      example_case_nonsupport_mobile_tips: "The example case nonsupport mobile platforms",
      example_case_nonsupport_web_canvas_tips: "The example case nonsupport Canvas mode",
      example_case_support_webGl_tips: "The example case only supports WebGL mode",
      example_case_support_mobile_tips: "The example case only supports mobile platforms",
      example_case_support_mobile_android_tips: "The example case only supports Android mobile platform",
      example_case_support_native_chrome_tips: "The example case only supports Chrome browser (Native)",
      example_case_support_native_desktop_tips: "The example case only supports the Mac platform and Windows platform",
      "TestList.fire.30": "Back list",
      "TestList.fire.37": "View intro",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "This is Spirte Single.",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "This is Spirte From Atlas.",
      "cases/01_graphics/01_sprite/FilledSprite.fire.9": "Fill Type: HORIZONTAL",
      "cases/01_graphics/01_sprite/FilledSprite.fire.15": "Fill Type: VERTICAL",
      "cases/01_graphics/01_sprite/FilledSprite.fire.23": "FILL Type: RADIAL",
      "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "This is Simple Sprite.",
      "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "This is Sliced Sprite.",
      "cases/01_graphics/01_sprite/TiledSprite.fire.6": "This is Tiled Sprite.",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "TRIMMED ",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "No TRIMMED",
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": 'Particle 1\n"Auto Remove On Finish" disabled',
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": 'Particle 2\n"Auto Remove On Finish" enabled',
      "cases/01_graphics/02_particle/ToggleParticle.fire.6": 'Press "Button" to toggle particle play',
      "cases/02_ui/01_widget/AdvancedWidget.fire.7": "Top Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.14": "Top Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.21": "Top Right",
      "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.28": "Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.35": "Right",
      "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.42": "Bottom Left",
      "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.49": "Bottom",
      "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.56": "Bottom Right",
      "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.63": "This is Advanced WIdget.",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne is false, It is always aligns",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne is true, It aligns only once",
      "cases/02_ui/01_widget/AnimatedWidget.fire.9": "This is Animation Widget.",
      "cases/02_ui/01_widget/AutoResize.fire.13": "This is Widget Auto Resize.",
      "cases/02_ui/01_widget/WidgetAlign.fire.18": "This is Widget Align.",
      "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
      "cases/02_ui/02_label/AlignFontLabel.fire.6": "Align Label",
      "cases/02_ui/02_label/AlignFontLabel.fire.9": "Horizontal Align",
      "cases/02_ui/02_label/AlignFontLabel.fire.14": "Hello! \nWelcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.16": "Align: LEFT",
      "cases/02_ui/02_label/AlignFontLabel.fire.21": "Hello! \nWelcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.23": "Align: CENTER",
      "cases/02_ui/02_label/AlignFontLabel.fire.28": "Hello! \nWelcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.30": "Align: RIGHT",
      "cases/02_ui/02_label/AlignFontLabel.fire.33": "Vertical Align",
      "cases/02_ui/02_label/AlignFontLabel.fire.38": "Welcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.40": "Align: TOP",
      "cases/02_ui/02_label/AlignFontLabel.fire.45": "Welcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.47": "Align: CENTER",
      "cases/02_ui/02_label/AlignFontLabel.fire.52": "Welcome Come To \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.54": "Align: BOTTOM",
      "cases/02_ui/02_label/SystemFontLabel.fire.6": "System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.9": "Wrap",
      "cases/02_ui/02_label/SystemFontLabel.fire.14": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.21": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.26": "No Wrap",
      "cases/02_ui/02_label/SystemFontLabel.fire.31": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.38": "This is System Font",
      "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.45": "Hello! Welcome Come To Cocos Creator",
      "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
      "cases/02_ui/03_button/ButtonInScroll.js.1": "Top button clicked!",
      "cases/02_ui/03_button/ButtonInScroll.js.2": "Bottom button clicked!",
      "cases/02_ui/03_button/ButtonInScroll.fire.21": "Which button is clicked?",
      "cases/02_ui/03_button/ButtonInScroll.fire.27": "drag to reveal more buttons\n\n",
      "cases/02_ui/03_button/SimpleButton.js.1": "Left button clicked!",
      "cases/02_ui/03_button/SimpleButton.js.2": "Right button clicked!",
      "cases/02_ui/03_button/ButtonInteractable.fire.7": "PLAY",
      "cases/02_ui/03_button/ButtonInteractable.fire.16": "STOP",
      "cases/02_ui/03_button/ButtonInteractable.fire.21": "interactable: true",
      "cases/02_ui/03_button/ButtonInteractable.fire.23": "interactable: false",
      "cases/02_ui/03_button/ButtonInteractable.js.1": "interactable: ",
      "cases/02_ui/03_button/ButtonInteractable.js.2": "interactable: ",
      "cases/02_ui/03_button/SimpleButton.fire.6": "Which button is clicked?",
      "cases/02_ui/04_progressbar/progressbar.fire.7": "Horizontal bar with progress 0.3",
      "cases/02_ui/04_progressbar/progressbar.fire.11": "Horizontal bar reverse with progress 1.0",
      "cases/02_ui/04_progressbar/progressbar.fire.15": "Vertical bar \nfrom bottom",
      "cases/02_ui/04_progressbar/progressbar.fire.19": "Vertical bar \nfrom top",
      "cases/02_ui/04_progressbar/progressbar.fire.23": "Progress bar with sprite",
      "cases/02_ui/04_progressbar/progressbar.fire.28": "Progress bar with child sprite",
      "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
      "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
      "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview full functionality",
      "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview without inertia",
      "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview without elastic",
      "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview horizontal scroll only",
      "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview vertical only",
      "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview no scrollbar",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "Basic",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "Horizontal",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "Vertical",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "Grid Layout Axis horizontal",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "Grid Layout Axis vertical",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "Horizontal layout none",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "Vertical layout none",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "Grid start axis horizontal none",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "Grid start axis vertical none",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView with vertical  layout",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView with horizontal layout",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView with Grid Layout\nstart axis: horizontal ",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView with Grid Layout\nstart axis: vertical ",
      "cases/02_ui/06_layout/LayoutNone.fire.6": "Basic layout, Type: None\nResize container",
      "cases/02_ui/06_layout/LayoutNone.fire.35": "Horizontal layout None\nNo resize",
      "cases/02_ui/06_layout/LayoutNone.fire.60": "Vertical layout, Type: None\nNo resize",
      "cases/02_ui/06_layout/LayoutNone.fire.77": "Grid start axis: horizontal, Type: None\nNo resize",
      "cases/02_ui/06_layout/LayoutNone.fire.142": "Grid start axis: vertical, Type: None\nNo resize",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
      "cases/02_ui/07_editBox/editbox.js.1": "Enter Text: ",
      "cases/02_ui/07_editBox/EditBox.fire.25": "Single Line Password:",
      "cases/02_ui/07_editBox/EditBox.fire.27": "Single Line Text:",
      "cases/02_ui/07_editBox/EditBox.fire.29": "Mutiple Line Text:",
      "cases/02_ui/07_editBox/EditBox.fire.32": "Click",
      "cases/02_ui/07_editBox/EditBox.fire.38": "Button must be on top of EditBox, \nand it should enable click.",
      "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "Press 'A' or 'D' to control sheep",
      "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
      "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "Try touching anywhere.",
      "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "The sample can only be effective on mobile platforms!",
      "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.21": "Use your fingers to zoom image!",
      "cases/03_gameplay/02_actions/SimpleAction.fire.13": "This is Simple Action.",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "This is Animate Custom Property.",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "Start the first animation",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "This is Animation Event.",
      "cases/03_gameplay/03_animation/AnimationEvent.js.1": "Start the",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "This is Move Animation.",
      "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "This is SprieFrame Animation.",
      "cases/03_gameplay/03_animation/CreateClip.fire.1": "Dynamic Creating AnimationClip",
      "cases/04_audio/SimpleAudio.fire.6": "Enjoy the music!",
      "cases/05_scripting/01_properties/NodeArray.fire.14": "This is Node Array.",
      "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.10": "This is Non Serialized.",
      "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
      "cases/05_scripting/01_properties/ReferenceType.fire.11": "This example does not include the runtime demonstration",
      "cases/05_scripting/01_properties/ValueType.fire.6": "This example does not include the runtime demonstration",
      "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "This is Instantiate Prefab.",
      "cases/05_scripting/03_events/EventInMask.fire.23": "Change order of nodes",
      "cases/05_scripting/03_events/SimpleEvent.fire.19": "Touch event can support click",
      "cases/05_scripting/03_events/SimpleEvent.fire.21": "Mouse event can support click, hover, wheel",
      "cases/05_scripting/03_events/SimpleEvent.fire.23": "Custom event can be triggered manually\n(Click button above)",
      "cases/05_scripting/03_events/SimpleEvent.fire.25": "This is Simple Event.",
      "cases/05_scripting/03_events/TouchPropagation.fire.15": "This is Touch Propagation.",
      "cases/05_scripting/03_events/MousePropagation.fire.1": "This is Mouse Propagation.",
      "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.12": "Repeat Schedule",
      "cases/05_scripting/04_scheduler/scheduler.fire.18": "Cancel Schedules",
      "cases/05_scripting/04_scheduler/scheduler.fire.24": "Schedule Once",
      "cases/05_scripting/04_scheduler/scheduler.fire.29": "Counter use update function to change string value each frame",
      "cases/05_scripting/04_scheduler/scheduler.fire.31": "This is Scheduler.",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "This is Cross Reference.",
      "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "This is Life cycle.",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "Asset Loading",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "Load SpriteFrame",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "Load Texture",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "Load Audio",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "Load Txt",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "Load Font",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "Load Plist",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "Load Prefab",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "Load Scene",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "Load Animation",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "Load Spine",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "Not currently loaded Entity.",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "Loaded ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "Play ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "Create ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "Playing Music.",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "This is Font!",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "By Type",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "Load SpriteFrame",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "By Url",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "Load Prefab",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "LoadResDir",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "Load All",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "Load SpriteFrame All",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "Clear All",
      "cases/05_scripting/08_module/load_module.fire.6": "Load Module",
      "cases/05_scripting/08_module/load_module.fire.10": "Create Monster",
      "cases/05_scripting/09_singleton/Singleton.fire.6": "This example does not include the runtime demonstration",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "download complete!!",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "dowloading: ",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "click anywhere to download...",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "Loading Completed",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "Dowloading",
      "cases/05_scripting/11_network/NetworkCtrl.js.1": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.2": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.3": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.4": "waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\\nSend Binary WS was opened.",
      "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\\nResponse get.",
      "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\\nsendBinary Error was fired.",
      "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\\nwebsocket instance closed.",
      "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\\nSend Binary WS is waiting...",
      "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\\n",
      "cases/05_scripting/11_network/network.fire.7": "Label",
      "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
      "cases/05_scripting/11_network/network.fire.11": "Label",
      "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
      "cases/05_scripting/11_network/network.fire.15": "Label",
      "cases/05_scripting/11_network/network.fire.14": "WebSocket",
      "cases/05_scripting/11_network/network.fire.19": "Label",
      "cases/05_scripting/11_network/network.fire.18": "SocketIO",
      "cases/native_call/native_call.fire.1": "JS to JAVA reflection only works Android mobile platform!",
      "cases/native_call/native_call.fire.2": "Click on the button calls the static method!",
      "cases/native_call/native_call.fire.3": "Click",
      "cases/collider/Category.fire.3": "Group: Collider",
      "cases/collider/Category.fire.5": "Group: Collider",
      "cases/collider/Category.fire.7": "Group: Collider",
      "cases/collider/Category.fire.9": "Group: Default",
      "cases/collider/Shape.fire.20": "Show Polygon",
      "cases/collider/Shape.fire.27": "Show Circle",
      "cases/collider/Shape.fire.34": "Show Box",
      "cases/collider/Shape.fire.43": "Show Polygon",
      "cases/collider/Shape.fire.50": "Show Circle",
      "cases/collider/Shape.fire.57": "Show Box",
      "cases/motionStreak/MotionStreak.fire.1": "Change MotionStreak",
      "cases/spine/SpineBoy.fire.11": "Debug Slots",
      "cases/spine/SpineBoy.fire.18": "Debug Bones",
      "cases/spine/SpineBoy.fire.25": "Time Scale",
      "cases/spine/SpineBoy.fire.36": "Stop",
      "cases/spine/SpineBoy.fire.43": "Walk",
      "cases/spine/SpineBoy.fire.50": "Run",
      "cases/spine/SpineBoy.fire.58": "Jump",
      "cases/spine/SpineBoy.fire.65": "Shoot",
      "cases/tiledmap/Puzzle.fire.18": "You Win",
      "cases/tiledmap/Puzzle.fire.21": "Restart",
      "cases/tiledmap/Dynamic-Tiledmap.fire.22": "Dynamically created TiledMap",
      "res/prefabs/ListItem.prefab.2": "Label ssss",
      "res/prefabs/Monster.prefab.3": "Name:",
      "res/prefabs/Monster.prefab.11": "Level :",
      "res/prefabs/Monster.prefab.19": "Hp :",
      "res/prefabs/Monster.prefab.27": "Attack :",
      "res/prefabs/Monster.prefab.35": "Defense :",
      "res/prefabs/loadItem.prefab.1": "Label",
      "resources/test assets/prefab.prefab.2": "This is Prefab",
      "resources/test assets/scene.fire.3": "Return Asset Loading Scene",
      "resources/test assets/scene.fire.6": "Return",
      "scripts/Global/Menu.js.1": "Temporary lack of introduction",
      "scripts/Global/Menu.js.hide.info": "View Info",
      "scripts/Global/Menu.js.view.info": "Hide Info",
      "cases/anysdk/1": "Only works in the Android or iOS or Web-Mobile platforms",
      "cases/anysdk/2": "Only works in the Android or iOS platforms",
      "cases/anysdk/3": "The anysdk module is not supported"
    };
    cc._RF.pop();
  }, {} ],
  follow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d96400vNFFPIpzg48kPuXVc", "follow");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.node.active = !cc.sys.isMobile;
        if (!this.target) return;
        var follow = cc.follow(this.target, cc.rect(0, 0, 2e3, 2e3));
        this.node.runAction(follow);
      }
    });
    cc._RF.pop();
  }, {} ],
  i18n: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93789C/shtIL6entYsZPjee", "i18n");
    "use strict";
    var Polyglot = require("polyglot");
    var lang = cc.sys.language;
    "zh" !== lang && (lang = "en");
    var data = require(lang);
    var polyglot = new Polyglot({
      phrases: data,
      allowMissing: true
    });
    module.exports = {
      init: function init(language) {
        lang = language;
        data = require(lang);
        polyglot.replace(data);
      },
      t: function t(key, opt) {
        return polyglot.t(key, opt);
      }
    };
    cc._RF.pop();
  }, {
    polyglot: "polyglot"
  } ],
  lineTo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ed7bVI5mxF+I75PHb0k24q", "lineTo");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.WHITE);
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.fillColor = cc.hexToColor("#ff0000");
        g.moveTo(-20, 0);
        g.lineTo(0, -100);
        g.lineTo(20, 0);
        g.lineTo(0, 100);
        g.close();
        g.stroke();
        g.fill();
      },
      onDisable: function onDisable() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.BLACK);
      }
    });
    cc._RF.pop();
  }, {} ],
  linejoin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23e05St68tC7aM880aEaUaS", "linejoin");
    "use strict";
    var LineJoin = cc.Graphics.LineJoin;
    var LineCap = cc.Graphics.LineCap;
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.WHITE);
        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.lineWidth = 20;
        this.time = 0;
        this.radius = 100;
        this.draw();
      },
      onDisable: function onDisable() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.BLACK);
      },
      update: function update(dt) {
        this.time += .5 * dt;
        this.draw();
      },
      draw: function draw() {
        var graphics = this.graphics;
        graphics.clear();
        var rx = this.radius * Math.sin(this.time);
        var ry = -this.radius * Math.cos(this.time);
        graphics.lineCap = LineCap.BUTT;
        graphics.lineJoin = LineJoin.BEVEL;
        this.drawLine(-200, 0, rx, ry);
        graphics.lineJoin = LineJoin.MITER;
        this.drawLine(0, 0, rx, ry);
        graphics.lineJoin = LineJoin.ROUND;
        this.drawLine(200, 0, rx, ry);
        graphics.lineJoin = LineJoin.MITER;
        graphics.lineCap = LineCap.BUTT;
        this.drawLine(0, -125, rx, ry);
        graphics.lineCap = LineCap.SQUARE;
        this.drawLine(-200, -125, rx, ry);
        graphics.lineCap = LineCap.ROUND;
        this.drawLine(200, -125, rx, ry);
      },
      drawLine: function drawLine(x, y, rx, ry) {
        var graphics = this.graphics;
        graphics.moveTo(x + rx, y + ry);
        graphics.lineTo(x, y);
        graphics.lineTo(x - rx, y + ry);
        graphics.stroke();
      }
    });
    cc._RF.pop();
  }, {} ],
  loadResDir_example: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fee3dcLoaZCvrJ9FZrBngbb", "loadResDir_example");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        btnClearAll: cc.Node,
        label: cc.Prefab,
        scrollView: cc.ScrollView
      },
      _init: function _init() {
        this._assets = [];
        this._hasLoading = false;
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
      },
      onLoad: function onLoad() {
        this._init();
      },
      _createLabel: function _createLabel(text) {
        var node = cc.instantiate(this.label);
        var label = node.getComponent(cc.Label);
        label.textKey = text;
        this.scrollView.content.addChild(node);
      },
      _clear: function _clear() {
        this.scrollView.content.removeAllChildren(true);
        for (var i = 0; i < this._assets.length; ++i) {
          var asset = this._assets[i];
          if ("object" === ("undefined" === typeof asset ? "undefined" : _typeof(asset)) && !asset._uuid) continue;
          cc.loader.release(this._assets[i]);
        }
      },
      onClearAll: function onClearAll() {
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
        this._clear();
      },
      onLoadAll: function onLoadAll() {
        var _this = this;
        if (this._hasLoading) return;
        this._hasLoading = true;
        this._clear();
        this._createLabel("Load All Assets");
        this.scrollView.scrollToTop();
        cc.loader.loadResDir("test assets", function(err, assets) {
          if (!_this.isValid) return;
          _this._assets = assets;
          var text = "";
          for (var i = 0; i < assets.length; ++i) {
            text = "string" === typeof assets[i] ? assets[i] : assets[i].url || assets[i]._name || assets[i];
            if ("string" !== typeof text) continue;
            _this._createLabel(text);
          }
          _this._hasLoading = false;
          _this.btnClearAll.active = true;
        });
      },
      onLoadSpriteFrameAll: function onLoadSpriteFrameAll() {
        var _this2 = this;
        if (this._hasLoading) return;
        this._hasLoading = true;
        this._clear();
        this._createLabel("Load All Sprite Frame");
        this.scrollView.scrollToTop();
        cc.loader.loadResDir("test assets", cc.SpriteFrame, function(err, assets) {
          if (!_this2.isValid) return;
          _this2._assets = assets;
          var text = "";
          for (var i = 0; i < assets.length; ++i) {
            text = "string" === typeof assets[i] ? assets[i] : assets[i].url || assets[i]._name || assets[i];
            _this2._createLabel(text);
          }
          _this2._hasLoading = false;
          _this2.btnClearAll.active = true;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  "moving-objects": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d056HwAmhA7ZTa6tqf8K23", "moving-objects");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tempPrefab: {
          default: null,
          type: cc.Node
        },
        camera: {
          default: null,
          type: cc.Node
        },
        root: {
          default: null,
          type: cc.Node
        },
        moveSpeed: 100,
        nodeCount: 2e3,
        _useCamera: true,
        useCamera: {
          get: function get() {
            return this._useCamera;
          },
          set: function set(v) {
            if (this._useCamera === v) return;
            this._useCamera = v;
            if (this.movingNode) {
              this.movingNode = v ? this.camera : this.root;
              this.camera.x = this.root.x = 0;
              this.moveSpeed = -this.moveSpeed;
              this.camera.active = !!v;
            }
          }
        },
        _enableCulling: true,
        enableCulling: {
          get: function get() {
            return this._enableCulling;
          },
          set: function set(v) {
            this._enableCulling = v;
            this.setMacroCulling(v);
          }
        }
      },
      onEnable: function onEnable() {
        this._originEnableCulling = cc.macro.ENABLE_CULLING;
      },
      onDisable: function onDisable() {
        this.setMacroCulling(this._originEnableCulling);
      },
      onLoad: function onLoad() {
        for (var i = 0; i < this.nodeCount; i++) {
          var node = cc.instantiate(this.tempPrefab);
          node.x = 960 * (Math.random() - .5);
          node.y = 640 * (Math.random() - .5);
          node.parent = this.root;
        }
        this.movingNode = this._useCamera ? this.camera : this.root;
        this.setMacroCulling(this._enableCulling);
      },
      setMacroCulling: function setMacroCulling(enable) {
        if (cc.macro.ENABLE_CULLING === enable || false) return;
        cc.macro.ENABLE_CULLING = enable;
        cc.director.getScene()._sgNode._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.cullingDirty);
        cc.renderer.childrenOrderDirty = true;
      },
      update: function update(dt) {
        this.movingNode.x += this.moveSpeed * dt;
        (this.moveSpeed > 0 && this.movingNode.x > 900 || this.moveSpeed < 0 && this.movingNode.x < -900) && (this.moveSpeed *= -1);
      },
      useCameraChanged: function useCameraChanged(toggle) {
        this.useCamera = toggle.isChecked;
      },
      enableCullingChanged: function enableCullingChanged(toggle) {
        this.enableCulling = toggle.isChecked;
      }
    });
    cc._RF.pop();
  }, {} ],
  polyglot: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "69decSgpRlE1rzEKp0RzG3V", "polyglot");
      "use strict";
      var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      (function(root, factory) {
        "function" === typeof define && define.amd ? define([], function() {
          return factory(root);
        }) : "object" === ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? module.exports = factory(root) : root.Polyglot = factory(root);
      })("undefined" !== typeof global ? global : void 0, function(root) {
        var replace = String.prototype.replace;
        function Polyglot(options) {
          options = options || {};
          this.phrases = {};
          this.extend(options.phrases || {});
          this.currentLocale = options.locale || "en";
          this.allowMissing = !!options.allowMissing;
          this.warn = options.warn || warn;
        }
        Polyglot.VERSION = "1.0.0";
        Polyglot.prototype.locale = function(newLocale) {
          newLocale && (this.currentLocale = newLocale);
          return this.currentLocale;
        };
        Polyglot.prototype.extend = function(morePhrases, prefix) {
          var phrase;
          for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === ("undefined" === typeof phrase ? "undefined" : _typeof(phrase)) ? this.extend(phrase, key) : this.phrases[key] = phrase;
          }
        };
        Polyglot.prototype.unset = function(morePhrases, prefix) {
          var phrase;
          if ("string" === typeof morePhrases) delete this.phrases[morePhrases]; else for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === ("undefined" === typeof phrase ? "undefined" : _typeof(phrase)) ? this.unset(phrase, key) : delete this.phrases[key];
          }
        };
        Polyglot.prototype.clear = function() {
          this.phrases = {};
        };
        Polyglot.prototype.replace = function(newPhrases) {
          this.clear();
          this.extend(newPhrases);
        };
        Polyglot.prototype.t = function(key, options) {
          var phrase, result;
          options = null == options ? {} : options;
          "number" === typeof options && (options = {
            smart_count: options
          });
          if ("string" === typeof this.phrases[key]) phrase = this.phrases[key]; else if ("string" === typeof options._) phrase = options._; else if (this.allowMissing) phrase = key; else {
            this.warn('Missing translation for key: "' + key + '"');
            result = key;
          }
          if ("string" === typeof phrase) {
            options = clone(options);
            result = choosePluralForm(phrase, this.currentLocale, options.smart_count);
            result = interpolate(result, options);
          }
          return result;
        };
        Polyglot.prototype.has = function(key) {
          return key in this.phrases;
        };
        var delimeter = "||||";
        var pluralTypes = {
          chinese: function chinese(n) {
            return 0;
          },
          german: function german(n) {
            return 1 !== n ? 1 : 0;
          },
          french: function french(n) {
            return n > 1 ? 1 : 0;
          },
          russian: function russian(n) {
            return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          czech: function czech(n) {
            return 1 === n ? 0 : n >= 2 && n <= 4 ? 1 : 2;
          },
          polish: function polish(n) {
            return 1 === n ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          icelandic: function icelandic(n) {
            return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
          }
        };
        var pluralTypeToLanguages = {
          chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
          german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
          french: [ "fr", "tl", "pt-br" ],
          russian: [ "hr", "ru" ],
          czech: [ "cs", "sk" ],
          polish: [ "pl" ],
          icelandic: [ "is" ]
        };
        function langToTypeMap(mapping) {
          var type, langs, l, ret = {};
          for (type in mapping) if (mapping.hasOwnProperty(type)) {
            langs = mapping[type];
            for (l in langs) ret[langs[l]] = type;
          }
          return ret;
        }
        var trimRe = /^\s+|\s+$/g;
        function trim(str) {
          return replace.call(str, trimRe, "");
        }
        function choosePluralForm(text, locale, count) {
          var ret, texts, chosenText;
          if (null != count && text) {
            texts = text.split(delimeter);
            chosenText = texts[pluralTypeIndex(locale, count)] || texts[0];
            ret = trim(chosenText);
          } else ret = text;
          return ret;
        }
        function pluralTypeName(locale) {
          var langToPluralType = langToTypeMap(pluralTypeToLanguages);
          return langToPluralType[locale] || langToPluralType.en;
        }
        function pluralTypeIndex(locale, count) {
          return pluralTypes[pluralTypeName(locale)](count);
        }
        var dollarRegex = /\$/g;
        var dollarBillsYall = "$$$$";
        function interpolate(phrase, options) {
          for (var arg in options) if ("_" !== arg && options.hasOwnProperty(arg)) {
            var replacement = options[arg];
            "string" === typeof replacement && (replacement = replace.call(options[arg], dollarRegex, dollarBillsYall));
            phrase = replace.call(phrase, new RegExp("%\\{" + arg + "\\}", "g"), replacement);
          }
          return phrase;
        }
        function warn(message) {
          root.console && root.console.warn && root.console.warn("WARNING: " + message);
        }
        function clone(source) {
          var ret = {};
          for (var prop in source) ret[prop] = source[prop];
          return ret;
        }
        return Polyglot;
      });
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  rect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a7cahCMIJCaZpdzIZPkHsp", "rect");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.WHITE);
        var g = this.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.fillColor = cc.hexToColor("#ff0000");
        g.rect(-250, 0, 200, 100);
        g.roundRect(50, 0, 200, 100, 20);
        g.stroke();
        g.fill();
      },
      onDisable: function onDisable() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.BLACK);
      }
    });
    cc._RF.pop();
  }, {} ],
  scheduleCallbacks: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "930deImxoZIkp6ugjMU5ULW", "scheduleCallbacks");
    "use strict";
    var i18n = require("i18n");
    cc.Class({
      extends: cc.Component,
      properties: {
        time: {
          default: 5
        }
      },
      _callback: function _callback() {
        this.node.runAction(this.seq);
        this.repeat ? this.counting = true : this.counting = false;
        this.time = 5;
        this.counter.textKey = this.time.toFixed(2) + " s";
      },
      onLoad: function onLoad() {
        var squashAction = cc.scaleTo(.2, 1, .6);
        var stretchAction = cc.scaleTo(.2, 1, 1.2);
        var scaleBackAction = cc.scaleTo(.1, 1, 1);
        var moveUpAction = cc.moveBy(1, cc.p(0, 100)).easing(cc.easeCubicActionOut());
        var moveDownAction = cc.moveBy(1, cc.p(0, -100)).easing(cc.easeCubicActionIn());
        this.seq = cc.sequence(squashAction, stretchAction, moveUpAction, scaleBackAction, moveDownAction, squashAction, scaleBackAction);
        this.counter = cc.find("Canvas/count_label").getComponent(cc.Label);
        this.counter.textKey = this.time.toFixed(2) + " s";
        this.counting = false;
        this.repeat = false;
      },
      update: function update(dt) {
        if (this.counting) {
          this.time -= dt;
          this.counter.textKey = this.time.toFixed(2) + " s";
        }
      },
      stopCounting: function stopCounting() {
        this.unschedule(this._callback);
        this.counting = false;
        this.counter.textKey = i18n.t("cases/05_scripting/04_scheduler/scheduleCallbacks.js.1");
        this.time = 5;
      },
      repeatSchedule: function repeatSchedule() {
        this.stopCounting();
        this.schedule(this._callback, 5);
        this.repeat = true;
        this.counting = true;
      },
      oneSchedule: function oneSchedule() {
        this.stopCounting();
        this.scheduleOnce(this._callback, 5);
        this.repeat = false;
        this.counting = true;
      },
      cancelSchedules: function cancelSchedules() {
        this.repeat = false;
        this.stopCounting();
      }
    });
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  "sine-waves": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65147r484dHPoeDmtu3n5DT", "sine-waves");
    "use strict";
    var PI180 = Math.PI / 180;
    var PI2 = 2 * Math.PI;
    var HALFPI = Math.PI / 2;
    var Ease = {};
    Ease.linear = function(percent, amplitude) {
      return amplitude;
    };
    Ease.sinein = function(percent, amplitude) {
      return amplitude * (Math.sin(percent * Math.PI - HALFPI) + 1) * .5;
    };
    Ease.sineout = function(percent, amplitude) {
      return amplitude * (Math.sin(percent * Math.PI + HALFPI) + 1) * .5;
    };
    Ease.sineinout = function(percent, amplitude) {
      return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * .5;
    };
    var EaseEnumOptins = {};
    for (var k in Ease) EaseEnumOptins[k] = -1;
    Ease.Enum = cc.Enum(EaseEnumOptins);
    var Waves = {};
    Waves.sine = function(x) {
      return Math.sin(x);
    };
    Waves.sign = function(x) {
      x = +x;
      if (0 === x || isNaN(x)) return x;
      return x > 0 ? 1 : -1;
    };
    Waves.square = function(x) {
      return Waves.sign(Math.sin(x * PI2));
    };
    Waves.sawtooth = function(x) {
      return 2 * (x - Math.floor(x + .5));
    };
    Waves.triangle = function(x) {
      return Math.abs(Waves.sawtooth(x));
    };
    var WavesEnumOptins = {};
    for (var _k in Waves) WavesEnumOptins[_k] = -1;
    Waves.Enum = cc.Enum(WavesEnumOptins);
    var Wave = cc.Class({
      name: "Wave",
      properties: {
        timeModifier: 1,
        amplitude: 50,
        wavelength: 50,
        segmentLength: 10,
        lineWidth: 1,
        waveType: {
          default: Waves.Enum.sine,
          type: Waves.Enum
        },
        easeType: {
          default: Ease.Enum.sinein,
          type: Ease.Enum
        },
        strokeColor: cc.color(255, 255, 255, 100)
      }
    });
    var SineWaves = cc.Class({
      extends: cc.Component,
      properties: {
        speed: 1,
        waves: {
          default: function _default() {
            return [ new Wave() ];
          },
          type: [ Wave ]
        }
      },
      onLoad: function onLoad() {
        cc.director.setClearColor && cc.director.setClearColor(cc.hexToColor("#01aaff"));
        this.time = 0;
        this.ctx = this.getComponent(cc.Graphics);
        this.ctx.lineCap = cc.Graphics.LineCap.BUTT;
        this.ctx.lineJoin = cc.Graphics.LineJoin.ROUND;
        var waves = this.waves;
        for (var i = 0, l = waves.length; i < l; i++) {
          waves[i].waveFn = Waves[Waves.Enum[waves[i].waveType]].bind(Waves);
          waves[i].easeFn = Ease[Ease.Enum[waves[i].easeType]].bind(Ease);
        }
      },
      onDisable: function onDisable() {
        cc.director.setClearColor && cc.director.setClearColor(cc.Color.BLACK);
      },
      update: function update(dt) {
        this.ctx.clear();
        this.yAxis = cc.visibleRect.height / 2;
        this.width = cc.visibleRect.width;
        this.waveWidth = .95 * this.width;
        this.waveLeft = .25 * this.width;
        this.time += dt;
        var waves = this.waves;
        for (var i = 0, l = waves.length; i < l; i++) {
          var timeModifier = this.waves[i].timeModifier || 1;
          this.drawWave(this.time * timeModifier, waves[i]);
        }
      },
      drawWave: function drawWave(time, options) {
        this.ctx.lineWidth = options.lineWidth;
        this.ctx.strokeColor = options.strokeColor;
        this.ctx.moveTo(0, this.yAxis);
        this.ctx.lineTo(this.waveLeft, this.yAxis);
        for (var i = 0; i < this.waveWidth; i += options.segmentLength) {
          var point = this.getPoint(time, i, options);
          this.ctx.lineTo(point.x, point.y);
        }
        this.ctx.lineTo(this.width, this.yAxis);
        this.ctx.stroke();
      },
      getPoint: function getPoint(time, position, options) {
        var x = time * this.speed + (-this.yAxis + position) / options.wavelength;
        var y = options.waveFn(x);
        var amplitude = options.easeFn(position / this.waveWidth, options.amplitude);
        x = position + this.waveLeft;
        y = amplitude * y + this.yAxis;
        return {
          x: x,
          y: y
        };
      }
    });
    module.exports = SineWaves;
    cc._RF.pop();
  }, {} ],
  zh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87f1fs0gohHDIfNg4aePXbt", "zh");
    "use strict";
    module.exports = {
      example_case_nonsupport_native_desktop_tips: "该测试用例不支持 Mac 平台和 Windows 平台",
      example_case_nonsupport_runtime_tips: "该测试用例不支持 Runtime 平台",
      example_case_nonsupport_mobile_tips: "该测试用例不支持移动平台",
      example_case_nonsupport_web_canvas_tips: "该测试用例不支持 Canvas 模式",
      example_case_support_webGl_tips: "该测试用例只支持 WebGL 模式",
      example_case_support_mobile_tips: "该测试用例只支持移动平台",
      example_case_support_mobile_android_tips: "该测试用例只支持 Android 移动平台",
      example_case_support_native_chrome_tips: "该测试用例只支持 PC 平台上的 Chrome 浏览器",
      example_case_support_native_desktop_tips: "该测试用例只支持 Mac 平台和 Windows 平台",
      "TestList.fire.30": "返回列表",
      "TestList.fire.37": "查看说明",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "这个精灵来自单张图片",
      "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "这个精灵来自图集",
      "cases/01_graphics/01_sprite/FilledSprite.fire.9": "填充类型：水平",
      "cases/01_graphics/01_sprite/FilledSprite.fire.15": "填充类型：垂直",
      "cases/01_graphics/01_sprite/FilledSprite.fire.23": "填充类型：圆形",
      "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "这是普通精灵",
      "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "这是九宫格精灵",
      "cases/01_graphics/01_sprite/TiledSprite.fire.6": "这是平铺精灵",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "自动剪裁 ",
      "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "未自动剪裁",
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": '粒子 1\n"完成时自动移除" 禁止',
      "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": '粒子 2\n"完成时自动移除" 开启',
      "cases/01_graphics/02_particle/ToggleParticle.fire.6": '按 "按钮" 进行开关粒子播放',
      "cases/02_ui/01_widget/AdvancedWidget.fire.7": "左上",
      "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.14": "上",
      "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.21": "右上",
      "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.28": "左",
      "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.35": "右",
      "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.42": "左下",
      "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.49": "下",
      "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
      "cases/02_ui/01_widget/AdvancedWidget.fire.56": "右下",
      "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
      "cases/02_ui/01_widget/AdvancedWidget.fire.63": "高级挂件",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne 为 false 时，会一直保持对齐",
      "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne 为 true 时，只在 Widget 生效时对齐一次",
      "cases/02_ui/01_widget/AnimatedWidget.fire.9": "动画挂件。",
      "cases/02_ui/01_widget/WidgetAlign.fire.18": "挂件对齐方式。",
      "cases/02_ui/01_widget/AutoResize.fire.13": "挂件自动调整大小。",
      "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
      "cases/02_ui/02_label/AlignFontLabel.fire.6": "文本对齐",
      "cases/02_ui/02_label/AlignFontLabel.fire.9": "水平对齐",
      "cases/02_ui/02_label/AlignFontLabel.fire.14": "哈啰！\n欢迎使用 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.16": "对齐: 靠左",
      "cases/02_ui/02_label/AlignFontLabel.fire.21": "哈啰！\n欢迎使用 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.23": "对齐: 居中",
      "cases/02_ui/02_label/AlignFontLabel.fire.28": "哈啰！\n欢迎使用 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.30": "对齐: 靠右",
      "cases/02_ui/02_label/AlignFontLabel.fire.33": "垂直对齐",
      "cases/02_ui/02_label/AlignFontLabel.fire.38": "欢迎使用 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.40": "对齐: 顶部",
      "cases/02_ui/02_label/AlignFontLabel.fire.45": "欢迎使用 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.47": "对齐: 居中",
      "cases/02_ui/02_label/AlignFontLabel.fire.52": "欢迎使用 \nCocos Creator",
      "cases/02_ui/02_label/AlignFontLabel.fire.54": "对齐: 底部",
      "cases/02_ui/02_label/SystemFontLabel.fire.6": "系统字体",
      "cases/02_ui/02_label/SystemFontLabel.fire.9": "换行",
      "cases/02_ui/02_label/SystemFontLabel.fire.14": "这是系统默认字体",
      "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.21": "这是系统默认字体",
      "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.26": "不换行",
      "cases/02_ui/02_label/SystemFontLabel.fire.31": "这是系统默认字体",
      "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
      "cases/02_ui/02_label/SystemFontLabel.fire.38": "这是系统默认字体",
      "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
      "cases/02_ui/02_label/SystemFontLabel.fire.45": "哈喽! 欢迎使用 Cocos Creator",
      "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
      "cases/02_ui/03_button/ButtonInScroll.js.1": "顶部按钮被点击！",
      "cases/02_ui/03_button/ButtonInScroll.js.2": "底部按钮被点击！",
      "cases/02_ui/03_button/ButtonInScroll.fire.21": "哪个按钮被点击？",
      "cases/02_ui/03_button/ButtonInScroll.fire.27": "拖动显示更多按钮\n\n",
      "cases/02_ui/03_button/SimpleButton.js.1": "左边的按钮被点击！",
      "cases/02_ui/03_button/SimpleButton.js.2": "右边的按钮被点击！",
      "cases/02_ui/03_button/ButtonInteractable.fire.7": "播放",
      "cases/02_ui/03_button/ButtonInteractable.fire.16": "停止",
      "cases/02_ui/03_button/ButtonInteractable.fire.21": "交互(interactable): true",
      "cases/02_ui/03_button/ButtonInteractable.fire.23": "交互(interactable): false",
      "cases/02_ui/03_button/ButtonInteractable.js.1": "交互(interactable): ",
      "cases/02_ui/03_button/ButtonInteractable.js.2": "交互(interactable): ",
      "cases/02_ui/03_button/SimpleButton.fire.6": "哪个按钮被点击？",
      "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
      "cases/02_ui/04_progressbar/progressbar.fire.7": "水平进度条，进度 0.3",
      "cases/02_ui/04_progressbar/progressbar.fire.11": "反向水平进度条，进度 1.0",
      "cases/02_ui/04_progressbar/progressbar.fire.15": "垂直进度条 \n从下向上",
      "cases/02_ui/04_progressbar/progressbar.fire.19": "垂直进度条 \n从上向下",
      "cases/02_ui/04_progressbar/progressbar.fire.23": "设置了精灵的进度条",
      "cases/02_ui/04_progressbar/progressbar.fire.28": "设置了精灵（子控件）的进度条",
      "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
      "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview 完整功能",
      "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview 没有惯性",
      "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview 没有弹性",
      "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview 只能水平滚动",
      "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview 只能垂直滚动",
      "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview 没有滚动条",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView 和垂直布局容器",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView 和水平布局容器",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView 和横向网格布局容器 ",
      "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView 和纵向网格布局容器 ",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "水平布局容器",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "垂直布局容器",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "横向网格布局容器",
      "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "纵向网格布局容器",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "基本",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "水平",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "垂直",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "横向网格布局容器",
      "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "纵向网格布局容器",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
      "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
      "cases/02_ui/07_editBox/editbox.js.1": "输入文本: ",
      "cases/02_ui/06_layout/LayoutNone.fire.6": "基本布局容器, 类型: None\n自动调整大小",
      "cases/02_ui/06_layout/LayoutNone.fire.35": "水平布局容器，类型: None\n不自动调整大小",
      "cases/02_ui/06_layout/LayoutNone.fire.60": "垂直布局容器，类型: None\n不自动调整大小",
      "cases/02_ui/06_layout/LayoutNone.fire.77": "横向网格布局容器，类型: None\n不自动调整大小",
      "cases/02_ui/06_layout/LayoutNone.fire.142": "纵向网格布局容器，类型: None\n不自动调整大小",
      "cases/02_ui/07_editBox/EditBox.fire.25": "单行密码框:",
      "cases/02_ui/07_editBox/EditBox.fire.27": "单行文本框:",
      "cases/02_ui/07_editBox/EditBox.fire.29": "多行文本框:",
      "cases/02_ui/07_editBox/EditBox.fire.32": "点击",
      "cases/02_ui/07_editBox/EditBox.fire.38": "按钮必须在 EditBox 的上面, \n并且它应该允许点击.",
      "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "按 'A' 或 'D' 键控制小绵羊",
      "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
      "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "请触摸任意位置试试",
      "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "用你的手指放缩图片！",
      "cases/03_gameplay/02_actions/SimpleAction.fire.13": "简单的动作",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
      "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "自定义动画属性",
      "cases/03_gameplay/03_animation/AnimationEvent.js.1": "开始第",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "开始第1个动画",
      "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "动画事件",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
      "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "这是一个移动动画。",
      "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "这是精灵帧动画",
      "cases/03_gameplay/03_animation/CreateClip.fire.1": "动态创建动画剪辑",
      "cases/04_audio/SimpleAudio.fire.6": "享受音乐!",
      "cases/05_scripting/01_properties/NodeArray.fire.14": "这是节点数组",
      "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
      "cases/05_scripting/01_properties/NonSerialized.fire.10": "这是非序列化",
      "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
      "cases/05_scripting/01_properties/ReferenceType.fire.11": "这个例子不包括运行时演示",
      "cases/05_scripting/01_properties/ValueType.fire.6": "这个例子不包括运行时演示",
      "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "实例化预制资源",
      "cases/05_scripting/03_events/EventInMask.fire.23": "更改节点排序",
      "cases/05_scripting/03_events/SimpleEvent.fire.19": "触摸事件可以支持点击",
      "cases/05_scripting/03_events/SimpleEvent.fire.21": "鼠标事件可以支持单击、悬停、滚轮",
      "cases/05_scripting/03_events/SimpleEvent.fire.23": "自定义事件可以手动触发\n(点击上面的按钮)",
      "cases/05_scripting/03_events/SimpleEvent.fire.25": "基本事件",
      "cases/05_scripting/03_events/TouchPropagation.fire.15": "触摸事件冒泡",
      "cases/05_scripting/03_events/MousePropagation.fire.1": "鼠标事件冒泡",
      "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
      "cases/05_scripting/04_scheduler/scheduler.fire.12": "重复定时器",
      "cases/05_scripting/04_scheduler/scheduler.fire.18": "取消定时器",
      "cases/05_scripting/04_scheduler/scheduler.fire.24": "定时执行1次",
      "cases/05_scripting/04_scheduler/scheduler.fire.29": "使用 update 函数每帧更新计数",
      "cases/05_scripting/04_scheduler/scheduler.fire.31": "定时器",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
      "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "交叉引用",
      "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "生命周期",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "资源加载",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "加载 SpriteFrame",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "加载 Texture",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "加载 Audio",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "加载 Txt",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "加载 Font",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "加载 Plist",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "加载 Prefab",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "加载 Scene",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "加载 Animation",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "加载 Spine",
      "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "当前尚无加载。",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "已加载 ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "播放 ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "创建 ",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "播放音乐。",
      "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "这是字体！",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "按类型",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "加载 SpriteFrame",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "按 Url",
      "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "加载预制资源",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "这个例子不包括运行时演示",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "全部加载",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "加载全部的SpriteFrame",
      "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "清空",
      "cases/05_scripting/08_module/load_module.fire.6": "加载模块",
      "cases/05_scripting/08_module/load_module.fire.10": "创建怪物",
      "cases/05_scripting/09_singleton/Singleton.fire.6": "这例子不包含运行时演示",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "下载完成!!",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "正在下载: ",
      "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "点击任意地方进行下载...",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "加载完成",
      "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "正在下载",
      "cases/05_scripting/11_network/NetworkCtrl.js.1": "请稍等...",
      "cases/05_scripting/11_network/NetworkCtrl.js.2": "请稍等...",
      "cases/05_scripting/11_network/NetworkCtrl.js.3": "请稍等...",
      "cases/05_scripting/11_network/NetworkCtrl.js.4": "请稍等...",
      "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\n发送二进制WS已打开.",
      "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\n收到响应.",
      "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\n发送二进制遇到错误.",
      "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\nwebsocket 实例已关闭.",
      "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\n发送二进制WS等待中...",
      "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\n",
      "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\n",
      "cases/05_scripting/11_network/network.fire.7": "Label",
      "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
      "cases/05_scripting/11_network/network.fire.11": "Label",
      "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
      "cases/05_scripting/11_network/network.fire.15": "Label",
      "cases/05_scripting/11_network/network.fire.14": "WebSocket",
      "cases/05_scripting/11_network/network.fire.19": "Label",
      "cases/05_scripting/11_network/network.fire.18": "SocketIO",
      "cases/native_call/native_call.fire.1": "点击按钮调用静态方法！",
      "cases/native_call/native_call.fire.2": "点击",
      "cases/collider/Category.fire.3": "组: 碰撞",
      "cases/collider/Category.fire.5": "组: 碰撞",
      "cases/collider/Category.fire.7": "组: 碰撞",
      "cases/collider/Category.fire.9": "组: 默认",
      "cases/collider/Shape.fire.20": "显示多边形",
      "cases/collider/Shape.fire.27": "显示圆",
      "cases/collider/Shape.fire.34": "显示盒子",
      "cases/collider/Shape.fire.43": "显示多边形",
      "cases/collider/Shape.fire.50": "显示圆",
      "cases/collider/Shape.fire.57": "显示盒子",
      "cases/motionStreak/MotionStreak.fire.1": "改变拖尾",
      "cases/spine/SpineBoy.fire.11": "调试插槽",
      "cases/spine/SpineBoy.fire.18": "调试关节",
      "cases/spine/SpineBoy.fire.25": "时间缩放",
      "cases/spine/SpineBoy.fire.36": "停止",
      "cases/spine/SpineBoy.fire.43": "走",
      "cases/spine/SpineBoy.fire.50": "跑",
      "cases/spine/SpineBoy.fire.58": "跳",
      "cases/spine/SpineBoy.fire.65": "射击",
      "cases/tiledmap/Puzzle.fire.18": "你赢了",
      "cases/tiledmap/Puzzle.fire.21": "重新开始",
      "cases/tiledmap/Dynamic-Tiledmap.fire.22": "动态创建 TiledMap",
      "res/prefabs/ListItem.prefab.2": "Label ssss",
      "res/prefabs/Monster.prefab.3": "名字:",
      "res/prefabs/Monster.prefab.11": "等级 :",
      "res/prefabs/Monster.prefab.19": "血量 :",
      "res/prefabs/Monster.prefab.27": "攻击 :",
      "res/prefabs/Monster.prefab.35": "防御 :",
      "res/prefabs/loadItem.prefab.1": "Label",
      "resources/test assets/prefab.prefab.2": "这是一个预制",
      "resources/test assets/scene.fire.3": "返回资源加载场景",
      "resources/test assets/scene.fire.6": "返回",
      "scripts/Global/Menu.js.1": "说明暂缺",
      "scripts/Global/Menu.js.hide.info": "查看说明",
      "scripts/Global/Menu.js.view.info": "关闭说明",
      "cases/anysdk/1": "该范例只在Android、iOS、Web-Mobile上有效果",
      "cases/anysdk/2": "该范例只在Android、iOS上有效果",
      "cases/anysdk/3": "不支持 anysdk 模块"
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "AR", "FilledSpriteControl", "TiledSpriteControl", "ParticleControl", "GoldBeatingAnime", "ButtonControlCtrl", "ButtonInteractable", "SimpleButtonCtrl", "ProgressBarCtrl", "Item", "ListViewCtrl", "LayoutResizeContainerCtrl", "EditBoxFocus", "EditboxCtrl", "WebviewCtrl", "RichTextEvents", "SliderCtrl", "PageViewCtrl", "MaskCtrl", "DeviceMotionCtrl", "SimpleKeyboardMovement", "OnMultiTouchCtrl", "OnTouchCtrl", "MoveAction", "RepeatAction", "RotationCtrl", "SimpleAction", "AnimateCustomPropertyCtrl", "AnimationCallback", "AnimationEvent", "CreateClipCtrl", "MoveAnimationCtrl", "SheepAnimationCtrl", "AudioEngineControl", "AudioSourceControl", "MyCustomComponent", "NodeGroupControl", "NonSerializedProperties", "ReferenceTypeProperties", "ValueTypeProperties", "MonsterPrefab", "PopulatePrefab", "ActionCallback", "CustomEvent", "Desactiver", "MouseDragger", "MouseEvent", "OrderSwitcher", "TouchDragger", "TouchEvent", "scheduleCallbacks", "Bar", "Switcher", "Foo", "DestroySelf", "AssetLoading", "ComeBackToAssetLoad", "LoadRes_example", "loadResDir_example", "InitData", "LoadModuleCtrl", "Monster", "Singleton", "SingletonCtrl", "LoadingBarCtrl", "NetworkCtrl", "NodeGenerator", "PoolHandler", "culling", "cullingGraphics", "moving-objects", "ColliderListener", "Hittest", "HeroControl", "follow", "ShowCollider", "Bullet", "Shooter", "TagColliderListener", "PlatformMotion", "SimpleMotion", "Wall", "DragonBonesCtrl", "RuntimeLabel", "doodle", "sine-waves", "arc", "ellipse", "lineTo", "linejoin", "rect", "MotionStreakCtrl", "SpineCtrl", "Puzzle", "dynamic-tiledmap", "LabelLocalized", "en", "zh", "i18n", "polyglot", "AdaptiveSprite", "Helpers", "Instruction", "ListItem", "Menu", "Metrics", "SceneList", "TipsManager" ]);