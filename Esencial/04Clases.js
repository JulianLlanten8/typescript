var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mapa = /** @class */ (function () {
    function Mapa(posX, posY, ancho, alto) {
        this.posX = posX;
        this.posY = posY;
        this.ancho = ancho;
        this.alto = alto;
    }
    Object.defineProperty(Mapa.prototype, "getPosX", {
        get: function () {
            return this.posX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mapa.prototype, "setPosX", {
        set: function (posX) {
            this.posX = posX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mapa.prototype, "getPosY", {
        get: function () {
            return this.posY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mapa.prototype, "setPosY", {
        set: function (posY) {
            this.posY = posY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mapa.prototype, "getAncho", {
        get: function () {
            return this.ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mapa.prototype, "setAncho", {
        set: function (ancho) {
            this.ancho = ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mapa.prototype, "getAlto", {
        get: function () {
            return this.alto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mapa.prototype, "setAlto", {
        set: function (alto) {
            this.alto = alto;
        },
        enumerable: false,
        configurable: true
    });
    Mapa.prototype.localizacion = function (posX, posY) {
        return posX + posY;
    };
    return Mapa;
}());
var mapa = new Mapa(10, 5, 25, 45);
var Mapa2 = /** @class */ (function (_super) {
    __extends(Mapa2, _super);
    function Mapa2(posX, posY, ancho, alto, color) {
        var _this = _super.call(this, posX, posY, ancho, alto) || this;
        _this.color = color;
        return _this;
    }
    Mapa2.prototype.informacion = function () {
        console.log(this.posX); //aqui si puedo acceder
    };
    return Mapa2;
}(Mapa));
var mapa2 = new Mapa2(1, 2, 3, 8, "blue");
console.table(mapa);
console.table(mapa2);
console.log(mapa.posX); //aqui no puedo acceder
