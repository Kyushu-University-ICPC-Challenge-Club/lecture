module.exports = {
    title: 'プログラミング講習会',
    description: '講習会用のページです',
    themeConfig: {
        nav: [
            {
                text: '資料',
                items: [
                    { text: 'Python', link: '/Python/' }
                ]
            },
        ],
        sidebar: {
            '/Python/': [
                '',
                '01',   // 出力
                '02',   // 変数
                '03',   // 入力
                '04',   // 条件分岐
                '05',   // 繰り返し
                '06',   // 文字列
                '07',   // リスト
                '08',   // 多重リスト
                '09',   // 集合
                '10',   // 辞書
                '11',   // 関数
            ]
        },
        sidebarDepth: 3,
    },
    markdown: {
        lineNumbers: true
    },
    base: '/lecture/',
    dest: 'docs'
}
