var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0960291259659893,
          "pitch": 0.11135475947770068,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4015436667014072,
          "pitch": 0.13617410701720623,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": 3.0147751494074884,
          "pitch": 0.29614942987845616,
          "rotation": 0,
          "target": "2-main-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-area",
      "name": "Main Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.209604150215519,
          "pitch": 0.284232474576239,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": 0.4336397845365312,
          "pitch": 0.14098255223261802,
          "rotation": 0,
          "target": "3-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-meeting-room",
      "name": "Meeting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07581195996031198,
          "pitch": 0.40214786285139326,
          "rotation": 0,
          "target": "2-main-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "South Bay Library",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
