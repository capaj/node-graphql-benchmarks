import "reflect-metadata";
import {
  Arg,
  Query,
  ObjectType,
  Field,
  SchemaRoot,
  compileSchema,
  ArrayField,
  DuplexObjectType,
  DuplexField,
} from "decapi";
import { data } from "../data";
import { default as md5 } from "md5";

@ObjectType()
class Book {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  numPages: number;
}

@DuplexObjectType()
class Author {
  @DuplexField()
  id: string;
  @DuplexField()
  name: string;
  @DuplexField()
  md5: string;
  @DuplexField()
  company: string;
  @ArrayField({ itemCast: Book })
  books: Book[];
}

@SchemaRoot()
class SimpleResolver {
  @Query({ type: String })
  md5(@Arg({ type: Author }) root: Author): string {
    return md5(root.name);
  }
  @Query({ castTo: [Author] })
  authors() {
    return data;
  }
}

@SchemaRoot()
class AsyncResolver {
  @Query({ type: String })
  md5(@Arg({ type: Author }) root: Author): string {
    return md5(root.name);
  }
  @Query({ castTo: [Author] })
  async authors() {
    return data;
  }
}

@SchemaRoot()
class MiddlewareResolver {
  @Query({ type: String })
  md5(@Arg({ type: Author }) root: Author): string {
    return md5(root.name);
  }
  @Query({ castTo: [Author] })
  // @UseMiddleware(({ args }, next) => {
  //   Object.keys(args).length;
  //   return next();
  // })
  async authors() {
    return data;
  }
}

@SchemaRoot()
class AsyncMiddlewareResolver {
  @Query({ type: String })
  md5(@Arg({ type: Author }) root: Author): string {
    return md5(root.name);
  }
  @Query({ castTo: [Author] })

  // @UseMiddleware(async ({ args }, next) => {
  //   Object.keys(args).length;
  //   return next();
  // })
  async authors() {
    return data;
  }
}

export function createTypeGraphQLSchema() {
  return compileSchema([SimpleResolver]);
}

export function createAsyncTypeGraphQLSchema() {
  return compileSchema([AsyncResolver]);
}

export function createMiddlewareTypeGraphQLSchema() {
  return compileSchema([MiddlewareResolver]);
}

export function createAsyncMiddlewareTypeGraphQLSchema() {
  return compileSchema([AsyncMiddlewareResolver]);
}
