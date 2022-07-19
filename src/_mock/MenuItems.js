export const MenuRoutes = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'About Us',
        path:'/about'
    },
    {
        title:'Brand',
        path:'/brand'
    },
    {
        title:'Marketplace',
        path:'/market-place',
        elements:[
            {title:'NFT Categories',path:'/market-place/categories'},
            {title:'Leader Board',path:'/market-place/leader-board'},
            {title:'NFT Marketplace',path:'/market-place/nft'},
            {title:'NFT Create',path:'/market-place/create-nft'},
            {title:'Product Detail',path:'/market-place/product-detail'},

        ]
    },
    {
        title:'Collections',
        path:'/collections'
    },
    {
        title:'Account',
        path:'/account',
        elements:[
            {title:'Profile',path:'/account/profile/51'},
            {title:'Edit Profile',path:'/account/edit'},
            {title:'Brand Profile',path:'/account/brand'},
            {title:'Analystics',path:'/account/analystic'},
            {title:'Help Center',path:'/account/help'}
        ]
    },
    {
        title:'Blogs',
        path:'/blogs'
    }
]