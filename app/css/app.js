/**
 * 加载底部导航栏组件和状态栏
 * 在所有页面中自动加载公共组件
 */
document.addEventListener('DOMContentLoaded', function() {
    // 检查app-container是否存在
    const appContainer = document.querySelector('.app-container');
    if (!appContainer) return;
    
    // 加载状态栏
    const statusBarIframe = document.querySelector('.app-container iframe[src*="status_bar.html"]');
    if (statusBarIframe) {
        const statusBarContainer = document.createElement('div');
        statusBarContainer.id = 'status-bar-container';
        statusBarContainer.style.width = '100%';
        statusBarContainer.style.height = '44px';
        
        // 替换iframe
        statusBarIframe.parentNode.replaceChild(statusBarContainer, statusBarIframe);
        
        // 加载状态栏内容
        fetch('components/status_bar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('status-bar-container').innerHTML = data;
            })
            .catch(error => {
                console.error('加载状态栏失败:', error);
                fetch('/app/components/status_bar.html')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('status-bar-container').innerHTML = data;
                    })
                    .catch(err => console.error('再次尝试加载状态栏失败:', err));
            });
    }
    
    // 创建底部导航栏容器
    const tabBarContainer = document.createElement('div');
    tabBarContainer.id = 'tab-bar-container';
    tabBarContainer.style.position = 'absolute';
    tabBarContainer.style.bottom = '0';
    tabBarContainer.style.left = '0';
    tabBarContainer.style.width = '100%';
    tabBarContainer.style.zIndex = '1000';
    
    // 将底部导航栏容器添加到app-container中
    appContainer.appendChild(tabBarContainer);
    
    // 加载底部导航栏
    fetch('components/tab_bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('tab-bar-container').innerHTML = data;
            
            // 导航栏加载后执行导航栏中的脚本
            const scripts = document.getElementById('tab-bar-container').getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                eval(scripts[i].innerText);
            }
        })
        .catch(error => {
            console.error('加载底部导航栏失败:', error);
            // 尝试使用相对于根目录的路径
            fetch('/app/components/tab_bar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('tab-bar-container').innerHTML = data;
                    
                    // 导航栏加载后执行导航栏中的脚本
                    const scripts = document.getElementById('tab-bar-container').getElementsByTagName('script');
                    for (let i = 0; i < scripts.length; i++) {
                        eval(scripts[i].innerText);
                    }
                })
                .catch(err => console.error('再次尝试加载底部导航栏失败:', err));
        });
}); 