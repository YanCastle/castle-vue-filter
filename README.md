提供几个基础的vue过滤器
```typescript
export default function install(Vue: any, config: any): void;
/**
 * 四舍五入
 * @param value
 * @param decimal
 */
export declare function round_money(value: any, decimal?: number): number;
/**
 * 向下取整
 * @param value
 * @param decimal
 */
export declare function floor_money(value: any, decimal?: number): number;
/**
 * 向上取整
 * @param value
 * @param decimal
 */
export declare function ceil_money(value: any, decimal?: number): number;
/**
 * 舍弃掉多余的部分
 * @param value
 * @param len
 */
export declare function more(value: any, len?: number): string;
/**
 * 格式化成日期
 * @param value
 * @param format
 */
export declare function date(value: any, format?: string): string;
/**
 * 格式化成日期时间
 * @param value
 * @param format
 */
export declare function datetime(value: any, format?: string): string;
/**
 * 格式化成时间
 * @param value
 * @param format
 */
export declare function time(value: any, format?: string): string;

```