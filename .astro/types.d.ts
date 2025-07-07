declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"about.md": {
	id: "about.md";
  slug: "about";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
};
"post": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">;
  render(): Render[".md"];
}>;
"posts": {
"Android Spinner二级联动.md": {
	id: "Android Spinner二级联动.md";
  slug: "android-spinner二级联动";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Android安装应用出现INSTALL_FAILED_SHARED_USER_INCOMPATIBLE.md": {
	id: "Android安装应用出现INSTALL_FAILED_SHARED_USER_INCOMPATIBLE.md";
  slug: "android安装应用出现install_failed_shared_user_incompatible";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Android读取相册图片并显示.md": {
	id: "Android读取相册图片并显示.md";
  slug: "android读取相册图片并显示";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"CSS学习笔记.md": {
	id: "CSS学习笔记.md";
  slug: "css学习笔记";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Cards主题个性化.md": {
	id: "Cards主题个性化.md";
  slug: "cards主题个性化";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"DRAM三种刷新方式.md": {
	id: "DRAM三种刷新方式.md";
  slug: "dram三种刷新方式";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ECharts的Tooltip不显示原因.md": {
	id: "ECharts的Tooltip不显示原因.md";
  slug: "echarts的tooltip不显示原因";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Failed to connect to githubcom port 443 Timed out.md": {
	id: "Failed to connect to githubcom port 443 Timed out.md";
  slug: "failed-to-connect-to-githubcom-port-443-timed-out";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Fluid添加暗黑模式.md": {
	id: "Fluid添加暗黑模式.md";
  slug: "fluid添加暗黑模式";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"HTML5学习笔记.md": {
	id: "HTML5学习笔记.md";
  slug: "html5学习笔记";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Hexo数学公式设置.md": {
	id: "Hexo数学公式设置.md";
  slug: "hexo数学公式设置";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"JS字符串操作连用问题.md": {
	id: "JS字符串操作连用问题.md";
  slug: "js字符串操作连用问题";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"JS遍历JSON输出Mysql拆分JSON语句.md": {
	id: "JS遍历JSON输出Mysql拆分JSON语句.md";
  slug: "js遍历json输出mysql拆分json语句";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Latex的Katex渲染引擎设置.md": {
	id: "Latex的Katex渲染引擎设置.md";
  slug: "latex的katex渲染引擎设置";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"MyBatis基础使用.md": {
	id: "MyBatis基础使用.md";
  slug: "mybatis基础使用";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"MySQL中JSON数据的查找和更新.md": {
	id: "MySQL中JSON数据的查找和更新.md";
  slug: "mysql中json数据的查找和更新";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Mysql删除数据库及导入sql文件.md": {
	id: "Mysql删除数据库及导入sql文件.md";
  slug: "mysql删除数据库及导入sql文件";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Nginx服务器通过地址访问页面出现404错误.md": {
	id: "Nginx服务器通过地址访问页面出现404错误.md";
  slug: "nginx服务器通过地址访问页面出现404错误";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Note - Filter Grafting for Deep Neural Networks.md": {
	id: "Note - Filter Grafting for Deep Neural Networks.md";
  slug: "note---filter-grafting-for-deep-neural-networks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Note - Filter Pruning via Geometric Median for Deep Convolutional Neural Networks Acceleration.md": {
	id: "Note - Filter Pruning via Geometric Median for Deep Convolutional Neural Networks Acceleration.md";
  slug: "note---filter-pruning-via-geometric-median-for-deep-convolutional-neural-networks-acceleration";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Note - Pruning Filter In Filter.md": {
	id: "Note - Pruning Filter In Filter.md";
  slug: "note---pruning-filter-in-filter";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"One-hot，Multi-hot.md": {
	id: "One-hot，Multi-hot.md";
  slug: "one-hotmulti-hot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Prejection Head.md": {
	id: "Prejection Head.md";
  slug: "prejection-head";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"SSH connect to host github.com port 22 Connection refused.md": {
	id: "SSH connect to host github.com port 22 Connection refused.md";
  slug: "ssh-connect-to-host-githubcom-port-22-connection-refused";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"SSH端口转发.md": {
	id: "SSH端口转发.md";
  slug: "ssh端口转发";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Spring基础使用.md": {
	id: "Spring基础使用.md";
  slug: "spring基础使用";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Surface-Go2-使用体验.md": {
	id: "Surface-Go2-使用体验.md";
  slug: "surface-go2-使用体验";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Ubuntu下安装向日葵远程软件.md": {
	id: "Ubuntu下安装向日葵远程软件.md";
  slug: "ubuntu下安装向日葵远程软件";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Vue创建非引用类型的对象.md": {
	id: "Vue创建非引用类型的对象.md";
  slug: "vue创建非引用类型的对象";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Vue实现一个画廊页面.md": {
	id: "Vue实现一个画廊页面.md";
  slug: "vue实现一个画廊页面";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Vue跨组件v-model实现.md": {
	id: "Vue跨组件v-model实现.md";
  slug: "vue跨组件v-model实现";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"Zero-shot、Few-shot和One-shot.md": {
	id: "Zero-shot、Few-shot和One-shot.md";
  slug: "zero-shotfew-shot和one-shot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"anaconda导入模块报错.md": {
	id: "anaconda导入模块报错.md";
  slug: "anaconda导入模块报错";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"fluid个性化.md": {
	id: "fluid个性化.md";
  slug: "fluid个性化";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"hexo-Failed-to-connect-to-github-com-port-443-Timed-out.md": {
	id: "hexo-Failed-to-connect-to-github-com-port-443-Timed-out.md";
  slug: "hexo-failed-to-connect-to-github-com-port-443-timed-out";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"java学习笔记.md": {
	id: "java学习笔记.md";
  slug: "java学习笔记";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"tensorflow报错.md": {
	id: "tensorflow报错.md";
  slug: "tensorflow报错";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"vue中自定义变量、ref和readonly定义变量的区别.md": {
	id: "vue中自定义变量、ref和readonly定义变量的区别.md";
  slug: "vue中自定义变量ref和readonly定义变量的区别";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"web展示图片出现锯齿.md": {
	id: "web展示图片出现锯齿.md";
  slug: "web展示图片出现锯齿";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"《九十六号公路》游后感.md": {
	id: "《九十六号公路》游后感.md";
  slug: "九十六号公路游后感";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"《仙剑奇侠传七》游玩体验.md": {
	id: "《仙剑奇侠传七》游玩体验.md";
  slug: "仙剑奇侠传七游玩体验";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"主题中note提示框的使用.md": {
	id: "主题中note提示框的使用.md";
  slug: "主题中note提示框的使用";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"使用ECharts和G2实现图表.md": {
	id: "使用ECharts和G2实现图表.md";
  slug: "使用echarts和g2实现图表";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"博客使用Github作为图床.md": {
	id: "博客使用Github作为图床.md";
  slug: "博客使用github作为图床";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"卷积核kernel、滤波器filter、层layer的概念区别.md": {
	id: "卷积核kernel、滤波器filter、层layer的概念区别.md";
  slug: "卷积核kernel滤波器filter层layer的概念区别";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"后网课时期.md": {
	id: "后网课时期.md";
  slug: "后网课时期";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"图片下方出现空行的成因和解决方案.md": {
	id: "图片下方出现空行的成因和解决方案.md";
  slug: "图片下方出现空行的成因和解决方案";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"定点数与浮点数.md": {
	id: "定点数与浮点数.md";
  slug: "定点数与浮点数";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"实现一个门票、卡券样式卡片.md": {
	id: "实现一个门票、卡券样式卡片.md";
  slug: "实现一个门票卡券样式卡片";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"实现多个渐变色叠加的边框.md": {
	id: "实现多个渐变色叠加的边框.md";
  slug: "实现多个渐变色叠加的边框";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"实现简单的页面导航功能.md": {
	id: "实现简单的页面导航功能.md";
  slug: "实现简单的页面导航功能";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"实现跟随鼠标位置的Tooltip.md": {
	id: "实现跟随鼠标位置的Tooltip.md";
  slug: "实现跟随鼠标位置的tooltip";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"最长公共子序列.md": {
	id: "最长公共子序列.md";
  slug: "最长公共子序列";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"机器数的表示方法.md": {
	id: "机器数的表示方法.md";
  slug: "机器数的表示方法";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"烟草仓储管理系统开发笔记（一）.md": {
	id: "烟草仓储管理系统开发笔记（一）.md";
  slug: "烟草仓储管理系统开发笔记一";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"烟草仓储管理系统开发笔记（三）.md": {
	id: "烟草仓储管理系统开发笔记（三）.md";
  slug: "烟草仓储管理系统开发笔记三";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"烟草仓储管理系统开发笔记（二）.md": {
	id: "烟草仓储管理系统开发笔记（二）.md";
  slug: "烟草仓储管理系统开发笔记二";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"烟草仓储管理系统开发笔记（五）.md": {
	id: "烟草仓储管理系统开发笔记（五）.md";
  slug: "烟草仓储管理系统开发笔记五";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"烟草仓储管理系统开发笔记（六）.md": {
	id: "烟草仓储管理系统开发笔记（六）.md";
  slug: "烟草仓储管理系统开发笔记六";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"烟草仓储管理系统开发笔记（四）.md": {
	id: "烟草仓储管理系统开发笔记（四）.md";
  slug: "烟草仓储管理系统开发笔记四";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"范数.md": {
	id: "范数.md";
  slug: "范数";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"通过Vite-plugin-svg-icons实现自定义的Icon组件.md": {
	id: "通过Vite-plugin-svg-icons实现自定义的Icon组件.md";
  slug: "通过vite-plugin-svg-icons实现自定义的icon组件";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"attachment": Record<string, {
  id: string;
  collection: "attachment";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
