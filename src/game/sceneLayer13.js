import BaseLayer from "./baseLayer";
export default class Scene13 extends BaseLayer {
  constructor() {
    super();
    this.sprites = {
      background: {
        resource: "底PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      cover: {
        resource: "奥运背景PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      title: {
        resource: "首次举办奥运会北京奥运会PNG",
        size: {
          width: 267 * 2,
          height: 97 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "2008PNG",
        size: {
          width: 115 * 2,
          height: 32 * 2
        },
        position: {
          x: 50,
          y: 300
        },
        animations: []
      },
      area: {
        resource: "北京PNG",
        size: {
          width: 128 * 2,
          height: 33 * 2
        },
        position: {
          x: 50,
          y: 400
        },
        animations: []
      },
      birdNest: {
        resource: "鸟巢PNG",
        size: {
          width: 372 * 2,
          height: 334 * 2
        },
        position: {
          x: 0,
          y: 400
        },
        animations: []
      },
      waterCube: {
        resource: "水立方PNG",
        size: {
          width: this.stageWidth,
          height: 237 * 2
        },
        position: {
          x: this.stageWidth,
          y: this.stageHeight
        },
        anchor: {
          x: 1,
          y: 1
        },
        animations: []
      },
      torch: {
        frames: {
          key: "火炬",
          type: "frames",
          length: 4
        },
        size: {
          width: 148 * 2,
          height: 442 * 2
        },
        position: {
          x: this.stageWidth,
          y: this.stageHeight
        },
        anchor: {
          x: 1,
          y: 1
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
