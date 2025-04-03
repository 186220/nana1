/**
 * SVG原型图生成器
 * 这个脚本用于将HTML页面转换为SVG格式的原型图
 */

class SVGGenerator {
    /**
     * 构造函数
     */
    constructor() {
        this.pages = [
            { name: 'home', title: '首页' },
            { name: 'projects', title: '项目' },
            { name: 'notifications', title: '消息' },
            { name: 'profile', title: '我的' },
            { name: 'reviews', title: '评价系统' },
            { name: 'profile_share', title: '个人名片分享' }
        ];
        
        this.svgWidth = 390;
        this.svgHeight = 844;
        this.outputPath = './svg_output/';
    }
    
    /**
     * 初始化生成器
     */
    init() {
        console.log('正在初始化SVG生成器...');
        this.createOutputDirectory();
        this.generateSVGs();
    }
    
    /**
     * 创建输出目录
     */
    createOutputDirectory() {
        // 在实际环境中，这里可以创建输出目录
        console.log('创建输出目录：', this.outputPath);
    }
    
    /**
     * 生成所有页面的SVG
     */
    generateSVGs() {
        console.log('开始生成SVG原型图...');
        
        this.pages.forEach(page => {
            this.generateSVG(page);
        });
    }
    
    /**
     * 生成单个页面的SVG
     * @param {Object} page - 页面信息对象
     */
    generateSVG(page) {
        console.log(`正在生成 ${page.title} 的SVG原型图...`);
        
        // 创建SVG文件对象
        const svgContent = this.createSVGTemplate(page);
        
        // 保存SVG文件
        this.saveSVG(page.name, svgContent);
    }
    
    /**
     * 创建SVG模板
     * @param {Object} page - 页面信息对象
     * @returns {string} SVG内容
     */
    createSVGTemplate(page) {
        // 在实际环境中，这里应该转换HTML为SVG
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${this.svgWidth}" height="${this.svgHeight}" viewBox="0 0 ${this.svgWidth} ${this.svgHeight}">
    <title>${page.title} - SWAP原型图</title>
    <rect width="100%" height="100%" fill="white"/>
    <image href="${page.name}.html" width="${this.svgWidth}" height="${this.svgHeight}"/>
    <text x="10" y="20" font-family="Arial" font-size="12" fill="#888">
        SWAP应用原型图 - ${page.title}
    </text>
</svg>`;
    }
    
    /**
     * 保存SVG文件
     * @param {string} filename - 文件名
     * @param {string} content - SVG内容
     */
    saveSVG(filename, content) {
        const path = `${this.outputPath}${filename}.svg`;
        console.log(`保存SVG文件到：${path}`);
        
        // 在实际环境中，这里应该保存文件到磁盘
        // 在浏览器环境中，可以创建下载链接
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(content);
        downloadLink.download = `${filename}.svg`;
        downloadLink.click();
    }
}

/**
 * 使用示例：
 * 
 * const generator = new SVGGenerator();
 * generator.init();
 */ 