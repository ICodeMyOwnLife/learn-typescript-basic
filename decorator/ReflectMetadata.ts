import 'reflect-metadata';

const _TYPE_ = 'design:type';
const _PARAM_TYPES_ = 'design:paramtypes';
const _RETURN_TYPE_ = 'design:returntype';


export default class ReflectMetadata {

  public static getType(target: any) {
    return Reflect.getMetadata(_TYPE_, target);
  }

  public static getParamTypes(target: any): any[] {
    return Reflect.getMetadata(_PARAM_TYPES_, target);
  }

  public static getReturnType(target: any) {
    return Reflect.getMetadata(_RETURN_TYPE_, target);
  }
}