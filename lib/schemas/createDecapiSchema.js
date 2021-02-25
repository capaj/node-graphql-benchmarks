"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncMiddlewareTypeGraphQLSchema = exports.createMiddlewareTypeGraphQLSchema = exports.createAsyncTypeGraphQLSchema = exports.createTypeGraphQLSchema = void 0;
require("reflect-metadata");
const decapi_1 = require("decapi");
const data_1 = require("../../dist/data");
const md5_1 = __importDefault(require("md5"));
let Book = class Book {};
__decorate(
  [decapi_1.Field(), __metadata("design:type", String)],
  Book.prototype,
  "id",
  void 0,
);
__decorate(
  [decapi_1.Field(), __metadata("design:type", String)],
  Book.prototype,
  "name",
  void 0,
);
__decorate(
  [decapi_1.Field(), __metadata("design:type", Number)],
  Book.prototype,
  "numPages",
  void 0,
);
Book = __decorate([decapi_1.ObjectType()], Book);
let Author = class Author {};
__decorate(
  [decapi_1.DuplexField(), __metadata("design:type", String)],
  Author.prototype,
  "id",
  void 0,
);
__decorate(
  [decapi_1.DuplexField(), __metadata("design:type", String)],
  Author.prototype,
  "name",
  void 0,
);
__decorate(
  [decapi_1.DuplexField(), __metadata("design:type", String)],
  Author.prototype,
  "md5",
  void 0,
);
__decorate(
  [decapi_1.DuplexField(), __metadata("design:type", String)],
  Author.prototype,
  "company",
  void 0,
);
__decorate(
  [decapi_1.ArrayField({ itemCast: Book }), __metadata("design:type", Array)],
  Author.prototype,
  "books",
  void 0,
);
Author = __decorate([decapi_1.DuplexObjectType()], Author);
let SimpleResolver = class SimpleResolver {
  md5(root) {
    return md5_1.default(root.name);
  }
  authors() {
    return data_1.data;
  }
};
__decorate(
  [
    decapi_1.Query({ type: String }),
    __param(0, decapi_1.Arg({ type: Author })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", String),
  ],
  SimpleResolver.prototype,
  "md5",
  null,
);
__decorate(
  [
    decapi_1.Query({ castTo: [Author] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0),
  ],
  SimpleResolver.prototype,
  "authors",
  null,
);
SimpleResolver = __decorate([decapi_1.SchemaRoot()], SimpleResolver);
let AsyncResolver = class AsyncResolver {
  md5(root) {
    return md5_1.default(root.name);
  }
  async authors() {
    return data_1.data;
  }
};
__decorate(
  [
    decapi_1.Query({ type: String }),
    __param(0, decapi_1.Arg({ type: Author })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", String),
  ],
  AsyncResolver.prototype,
  "md5",
  null,
);
__decorate(
  [
    decapi_1.Query({ castTo: [Author] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise),
  ],
  AsyncResolver.prototype,
  "authors",
  null,
);
AsyncResolver = __decorate([decapi_1.SchemaRoot()], AsyncResolver);
let MiddlewareResolver = class MiddlewareResolver {
  md5(root) {
    return md5_1.default(root.name);
  }
  async authors() {
    return data_1.data;
  }
};
__decorate(
  [
    decapi_1.Query({ type: String }),
    __param(0, decapi_1.Arg({ type: Author })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", String),
  ],
  MiddlewareResolver.prototype,
  "md5",
  null,
);
__decorate(
  [
    decapi_1.Query({ castTo: [Author] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise),
  ],
  MiddlewareResolver.prototype,
  "authors",
  null,
);
MiddlewareResolver = __decorate([decapi_1.SchemaRoot()], MiddlewareResolver);
let AsyncMiddlewareResolver = class AsyncMiddlewareResolver {
  md5(root) {
    return md5_1.default(root.name);
  }
  async authors() {
    return data_1.data;
  }
};
__decorate(
  [
    decapi_1.Query({ type: String }),
    __param(0, decapi_1.Arg({ type: Author })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", String),
  ],
  AsyncMiddlewareResolver.prototype,
  "md5",
  null,
);
__decorate(
  [
    decapi_1.Query({ castTo: [Author] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise),
  ],
  AsyncMiddlewareResolver.prototype,
  "authors",
  null,
);
AsyncMiddlewareResolver = __decorate(
  [decapi_1.SchemaRoot()],
  AsyncMiddlewareResolver,
);
function createTypeGraphQLSchema() {
  return decapi_1.compileSchema([SimpleResolver]);
}
exports.createTypeGraphQLSchema = createTypeGraphQLSchema;
function createAsyncTypeGraphQLSchema() {
  return decapi_1.compileSchema([AsyncResolver]);
}
exports.createAsyncTypeGraphQLSchema = createAsyncTypeGraphQLSchema;
function createMiddlewareTypeGraphQLSchema() {
  return decapi_1.compileSchema([MiddlewareResolver]);
}
exports.createMiddlewareTypeGraphQLSchema = createMiddlewareTypeGraphQLSchema;
function createAsyncMiddlewareTypeGraphQLSchema() {
  return decapi_1.compileSchema([AsyncMiddlewareResolver]);
}
exports.createAsyncMiddlewareTypeGraphQLSchema = createAsyncMiddlewareTypeGraphQLSchema;
//# sourceMappingURL=createDecapiSchema.js.map
