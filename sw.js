importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"01de4c29f3b1507de9e390c40665f35c","url":"contributors.html"},{"revision":"d471040f0aeade410ca21c718151ae28","url":"details.json"},{"revision":"f5555def57fb018ccbf1dd01f48b2363","url":"feedback.html"},{"revision":"502bd14062e18a78c03669267f04ec3d","url":"images/board.png"},{"revision":"0a32d78aebcfdb019bae215d01803f83","url":"images/ic.png"},{"revision":"99f9830c0efbc77d95de62217d3a2d21","url":"images/IC1.png"},{"revision":"b63473890b4efe8eb9fb9986bac3f659","url":"images/ic10.png"},{"revision":"efcc63699a3e31d125f3405d25490638","url":"images/ic11.png"},{"revision":"a9f9cada6468eb32ff2454179d380bd8","url":"images/ic2.png"},{"revision":"6138804755599be5d29bf14b5b379c3f","url":"images/ic3.png"},{"revision":"a700ef4982f3b6e290b4aac982da17e4","url":"images/ic4.png"},{"revision":"5ec9a35723f006c72dfaf39640d089aa","url":"images/ic5.png"},{"revision":"13a8d7b7d86af142128d1f6315d2cdcc","url":"images/ic6.png"},{"revision":"0bd345405d4a3d3c7cd752a7048795d6","url":"images/ic7.png"},{"revision":"1cd1b176f7994cac0975c015331cbe44","url":"images/ic8.png"},{"revision":"cbf7d66ba6306e7014d656574fb0038f","url":"images/ic9.png"},{"revision":"43a62eb4a46af5204e8f91b3497ba949","url":"images/iitb_logo_30dpi.png"},{"revision":"130b3a90016a6458fde0e539d96c8b2c","url":"images/image1.1ins.png"},{"revision":"458e7b64d44da0e2ffe80954b1a8d7ec","url":"images/image1.png"},{"revision":"d6a7ddfa91608f1ef27edf72b2f61220","url":"images/image1(2).png"},{"revision":"efa18e00a9afe48543aabfd6e26f8f4f","url":"images/image1(a).png"},{"revision":"2ad834d4d4113f82c0f8919fd5ce7e29","url":"images/image1(b.).png"},{"revision":"3789c3439bfa5e7640b3b7c462079920","url":"images/image1(b).png"},{"revision":"63f722ee8d3d51c7da368312aad10d58","url":"images/image10.png"},{"revision":"5a46d93b875e43c5659687a5c619da23","url":"images/image11.png"},{"revision":"1ceb31e4b4d116776cfd06d64e2f5f02","url":"images/image12.png"},{"revision":"ddf4e7a4cfbaa96996993cf90c38aeb1","url":"images/image13.png"},{"revision":"c32bbe60897c15b8da7a446ddd62eb65","url":"images/image14.png"},{"revision":"ef9ad5d1d5496b97158a387c744664ed","url":"images/image15.png"},{"revision":"d636dcb254fb16a01891c7c0a2366ce9","url":"images/image16(a).png"},{"revision":"f054e1bd8d4394ec8a2bd1cea9d735c6","url":"images/image16(b).png"},{"revision":"3f810d8b9e1b9b40b6925a7fc9a69906","url":"images/image16(c).png"},{"revision":"7f743df97edab99167e2906bc0a9cacb","url":"images/image17.png"},{"revision":"f9b33e7a2b5f9265c73929ae36fe2e85","url":"images/image18.png"},{"revision":"e0112ed76c6560b61bee1ba69ed28b7b","url":"images/image19.png"},{"revision":"0a55baeb0174bfd4444979189321b57d","url":"images/image1ins.png"},{"revision":"eaaa1de71d81f7252795f1aafb0bbe5d","url":"images/image2.png"},{"revision":"541948863cc6cb70aef627262332d487","url":"images/image2(2).png"},{"revision":"55046c356b4bc59465534029631b6621","url":"images/image20.png"},{"revision":"692c0af3e36c22396cf66137c4fd81e2","url":"images/image21(a).png"},{"revision":"d587300651c83d13b298b878ef5fcbc5","url":"images/image21(b).png"},{"revision":"9733b5bdafcdc75a88fcc9d3a5c343ac","url":"images/image21(c).png"},{"revision":"3529058dd48c6b94a740e7ab731ae4f1","url":"images/image22.png"},{"revision":"56c6f0e62d73681fc1e3e3acf91a023e","url":"images/image23.png"},{"revision":"44ea75e411cdde551bf1a74c3e9a6cae","url":"images/image24.png"},{"revision":"a112d5ba8b93f9fa6d03cde28a1aef86","url":"images/image25.png"},{"revision":"bd8d9ec3730868a919ac1e5b0ac699dd","url":"images/image26.png"},{"revision":"0509888319d07fb83efce172fd2c845b","url":"images/image2ins.png"},{"revision":"8ce52b639351a92441fcd45577ef8c73","url":"images/image3.png"},{"revision":"f2ba3d1be95f6771a47c245cd55c2b42","url":"images/image4.png"},{"revision":"bdf9d0c4786dc4e79cdb225d5f612031","url":"images/image4ins.png"},{"revision":"6cb2fc470e54c2dbd286c764e17e61f6","url":"images/image5.png"},{"revision":"2f700194ae0fb724fd0c555fc9e2861c","url":"images/image6.png"},{"revision":"1cc90d3693b97ba41d7d2d1ae1eeca60","url":"images/image7.png"},{"revision":"ab2a219e5c245de820fffb9ad3ad536f","url":"images/image8.png"},{"revision":"9b8c784ad5ccc70386dcdccc61c0b9b0","url":"images/image9.png"},{"revision":"5df845dde605ee428798f2579cc272b3","url":"images/led.png"},{"revision":"aedc997448220d9a9e1afa3bc7fe4c64","url":"images/MJPRohilkhand-logo.png"},{"revision":"d180213c46580f84afc76a6e27dd671e","url":"images/Multimeter.png"},{"revision":"2335a1cb16cb07ccfaf992b7ea66e1a3","url":"images/power1.png"},{"revision":"dc02b8d18151275c6d89ab7ca231dd44","url":"images/power2.png"},{"revision":"481e1fc848e78db57cbffb0bf75fd736","url":"images/power3.png"},{"revision":"722487ae915a02af7f82e4ecc1e79ec7","url":"images/que10.png"},{"revision":"5f5bc78c9f4ee7637732ed09845b9bef","url":"images/que10post.png"},{"revision":"9ea6e552badab81f3b717a23244df649","url":"images/que3.png"},{"revision":"dcbfb01e63e183f4a7ec35f8d5adfe77","url":"images/que4post.png"},{"revision":"5a4f27ebb25043bb3e067998e5617505","url":"images/que5.png"},{"revision":"161ecf5f90f4980fce13627e81226205","url":"images/que6.png"},{"revision":"ffd13e94f4e679cc6fecc74820388d4d","url":"images/que7post.png"},{"revision":"174819a12cde1ea2c8ffebdaef8a923e","url":"images/que7pre.png"},{"revision":"9dbdf4177172c52791a3e0cdabbb6653","url":"images/que8.png"},{"revision":"d076e5a5755e1e845e588441aaf133fc","url":"images/que8post.png"},{"revision":"561ed8d36dc4e18a04298563f6b9e869","url":"images/que8pre.png"},{"revision":"415d8d3bd4c1b8d1cc7496cf3d7f55a7","url":"images/que9.png"},{"revision":"a460d4f787e78b393d096a710b88f1aa","url":"images/que9post.png"},{"revision":"7964f63ad93ad4830f47d40f310ff462","url":"images/que9pre.png"},{"revision":"417637a5446c04d61b8aa15e06403b70","url":"images/resistance.png"},{"revision":"03ca95108b0cf056b846afa23988173e","url":"images/resistance1.1.png"},{"revision":"068c2488d329f051bd73159b8189efe1","url":"images/resistance1.png"},{"revision":"859909550b4e240df6e7df4cdce981d4","url":"images/resistance2.1.png"},{"revision":"f19ab323526536099cdb8b49f426e12d","url":"images/resistance2.png"},{"revision":"e3405d9a1c0570c60e661d9b2ab1b9f0","url":"images/resistance3.png"},{"revision":"8a22a9749c7558d1359751ef0d12a8b8","url":"images/supply.png"},{"revision":"cac733f25e7cd31cee77fc57b97947de","url":"images/supply1.png"},{"revision":"f803edfa0f683027aa0191b85bd51d0b","url":"images/table 1.png"},{"revision":"bd1353833c48088d597e1be57aa26dc6","url":"images/table 12.png"},{"revision":"de3dc6ea90d2ab8e6f952f492ac62661","url":"images/table 13.png"},{"revision":"66625ea017106fdc317fea6935c07dff","url":"images/table 17.png"},{"revision":"898134b8bfee3fb2013e1963ebf899ef","url":"images/table 18.png"},{"revision":"3dc5af652e38dd845f922897088908d1","url":"images/table 2.png"},{"revision":"1c524ac9fac4501b83ade69ec30fc78c","url":"images/table 23.png"},{"revision":"94642958ce574272cf52a8e5df970ba8","url":"images/table 25.png"},{"revision":"a3ce35b2f0a6d9d6f9d6de35e0861b66","url":"images/table 4.png"},{"revision":"00411b8c0e868b7ee97c441eefcb0c1d","url":"images/table 5.png"},{"revision":"f6c2946c3b5460de76ceb512f9fb89f4","url":"images/table 8.png"},{"revision":"5ecf2dc2280cce0585096e750c7f4a57","url":"images/table 9.png"},{"revision":"ac800133c87c3b44414c79e22eae46de","url":"images/Table1.1.png"},{"revision":"9fa2794411e305343a022c48a8370f52","url":"images/Table1.2.png"},{"revision":"6dfaec50108ce4fa0bd4e42f1d3f6d10","url":"images/Table1.3.png"},{"revision":"950af269120ce6cfd8283a718018d051","url":"images/Table1.4.png"},{"revision":"64594d0aabe57d068227a4556353e492","url":"images/Table1.5.png"},{"revision":"54103a8968ed6b0cbf56f9cc6db5550d","url":"images/Table1.6.png"},{"revision":"e4cf0638943d13b3e41ea8c0c8ac0d96","url":"images/table1.png"},{"revision":"dc9ce5585e4746df8f0cebf011553e4f","url":"images/Table10.1.png"},{"revision":"d6f9d3de5f6411a8b72a0efb3d4afa1a","url":"images/Table10.2.png"},{"revision":"3a5821c40f56502424138a34c0f21738","url":"images/Table10.3.png"},{"revision":"6efef9e037de3e5aca2aec1e01b9d9cc","url":"images/Table11.1.png"},{"revision":"46c59f7df84e4028127a7618aa881275","url":"images/Table11.2.png"},{"revision":"152f1cad497d58f39b795e08090e1db4","url":"images/Table11.3.png"},{"revision":"1f04cf346889c0b9ff86289d3cae1a58","url":"images/Table2.1.png"},{"revision":"519fe6b86a1b7c52f2e894819324ea31","url":"images/Table2.2.png"},{"revision":"74900c5702bf373841f5f8edfb0ce7f4","url":"images/Table2.3.png"},{"revision":"d3e601a356380bfcb0c5c41bfa35fbc5","url":"images/Table2.4.png"},{"revision":"0c0d36b8fc85b6179a02f5be7ea65312","url":"images/table2.png"},{"revision":"e76ff0734a8cca03ca142a11094e3bd3","url":"images/Table3.1.png"},{"revision":"f8eed4b84f62ad5a91f06df6ff6b3e48","url":"images/Table3.2.png"},{"revision":"be6fecc400d2dbde0956a9e6aa06226e","url":"images/Table3.3.png"},{"revision":"1565cec81863d63a94158084a726202e","url":"images/Table3.4.png"},{"revision":"bca37e0e34f071f30ac14df4d79a3ad9","url":"images/table3.png"},{"revision":"3d9881143165e2f4dc94010fa0fc551b","url":"images/Table4.1.png"},{"revision":"b0009b7853129f2c57f847083cf2c74a","url":"images/Table4.2.png"},{"revision":"6cd73003590e4304d09215a5dc39f761","url":"images/Table4.3.png"},{"revision":"fcddaa1dc2b03ab2fb6d8884b822c063","url":"images/Table4.4.png"},{"revision":"12dde2d55f08c0a3f03c7128dee0f67a","url":"images/Table5.1.png"},{"revision":"11579ffc44000477f078f770ca14d69b","url":"images/Table5.2.png"},{"revision":"e038c3cd95a94da453bf34dbb2c7b05e","url":"images/Table5.3.png"},{"revision":"d1376322321eca2908c1042ebfc3c4d8","url":"images/Table5.4.png"},{"revision":"1583d9cf889967abf5615b6e178428f5","url":"images/Table6.1.png"},{"revision":"749ea76ff1b56429674dedeaa3f4be0e","url":"images/Table6.2.png"},{"revision":"e7faac5f1e92bea1d1353f731b4d01a3","url":"images/Table6.3.png"},{"revision":"5645799f5fb4cc677ca5aac2160daeae","url":"images/Table6.4.png"},{"revision":"430efd79fe9427e79ef75ac168d8aa68","url":"images/Table7.1.png"},{"revision":"9daa06b3313be7e94fd563aff263d8ce","url":"images/Table7.2.png"},{"revision":"9c6796c7fc287084d4b155c6b01440c9","url":"images/Table7.3.png"},{"revision":"a271f1a7879118b34d56123d1dbd1338","url":"images/Table7.4.png"},{"revision":"ed8a9b81c047942503deeb6514aa5bdc","url":"images/Table8.1.png"},{"revision":"a909907bea563ac4fd8d1e6eac64bf61","url":"images/Table8.2.png"},{"revision":"8ca1a723c5b9458ce2729a0a230eb62d","url":"images/Table8.3.png"},{"revision":"837f726915d5abad50f95c92377e8b28","url":"images/Table9.1.png"},{"revision":"f1c1aaaeef2f800100c322d7d4d45968","url":"images/Table9.2.png"},{"revision":"8203b525e00d7eb0eaf652c356d94335","url":"images/Table9.3.png"},{"revision":"f2232c57c46e183d8cfcb2dfd4d68274","url":"images/toggle.png"},{"revision":"ccd3c316521c8a76a8cdfd28c39b6001","url":"index.html"},{"revision":"84b4b11e4b7875aa94bf3481b069ac22","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"475a2c40d883fbd546671449a9771adf","url":"posttest.html"},{"revision":"c2adb562e6edbb01f25140ec471188f1","url":"posttest.json"},{"revision":"1878ee3856ce91b9ae90a0d1f3031176","url":"pretest.html"},{"revision":"376d70271bacf2b99efee8a359dd8c67","url":"pretest.json"},{"revision":"f73b7ff996e9816f94370207a7bd90fe","url":"procedure.html"},{"revision":"dc69833195b6c9cb4fb39d74d5a062de","url":"references.html"},{"revision":"0140eb9768882aaa22e6d355d345c4fe","url":"simulation.html"},{"revision":"c17b35434c2a508df8f0da3c237d7bb8","url":"simulation/css/jquery-ui.css"},{"revision":"883d3ce9c2967b97668f5407666b8b0e","url":"simulation/css/jsplumb-doc.css"},{"revision":"8807193b27626f2b6468cb777d46bb73","url":"simulation/css/jsplumb.css"},{"revision":"a799cab80fa49ae473b44da465266cb2","url":"simulation/css/jsplumbtoolkit-defaults.css"},{"revision":"09c12c5c7221f2ff7689b00db1a95aa0","url":"simulation/css/jsplumbtoolkit-demo.css"},{"revision":"39322cf471f77c418123e301ded24c80","url":"simulation/css/main.css"},{"revision":"bcbac647c2f1b2182960c3dd1c9a4c0a","url":"simulation/css/style.css"},{"revision":"bed118dfcf7d71b845ded66426e010b7","url":"simulation/images/board.png"},{"revision":"405c4a2ef77096bb3755d66b32192911","url":"simulation/images/board1.png"},{"revision":"48a943180b433ee89749a943d8c54c58","url":"simulation/images/bulbon.png"},{"revision":"3de9019935a891dc72db7c4ad7c7accf","url":"simulation/images/capacitor1.png"},{"revision":"9f41516b90925a00419d4ed4d6c0b2d5","url":"simulation/images/cover.png"},{"revision":"7d8d80557e83a925f1c53d4914bd1480","url":"simulation/images/desk2.jpg"},{"revision":"84f80edcfcf5276bdc317c0da10247ae","url":"simulation/images/DMM.png"},{"revision":"8e59f87b859c4742233a61418dfe4161","url":"simulation/images/dot.png"},{"revision":"8e59f87b859c4742233a61418dfe4161","url":"simulation/images/dot1.png"},{"revision":"a48e63acbfd038815b7dbaeceba3126b","url":"simulation/images/dot2.png"},{"revision":"69d5939337b8f822d97849d238f68a41","url":"simulation/images/ic.png"},{"revision":"a2fd6a983e50b3aa9be504fb42f7c577","url":"simulation/images/IC4075.png"},{"revision":"b0c8f79c5d5a3dd4c41c9086468108c3","url":"simulation/images/IC7400.png"},{"revision":"6cddeb96d554b4a80bd291a7b131f294","url":"simulation/images/IC7402.png"},{"revision":"a18d245515983e6b5c6d9cb83c82fc10","url":"simulation/images/IC7404.png"},{"revision":"aac4a675be11809e1e9eb5f020b0ee5d","url":"simulation/images/IC7408.png"},{"revision":"95ca8c4679bd141ea1593e5f23e56151","url":"simulation/images/IC7410.png"},{"revision":"a9da12368e682e59b702a5005c47e93f","url":"simulation/images/IC7411.png"},{"revision":"eff05c2e20be67faa8bb5dba9a10d6ba","url":"simulation/images/IC74266.png"},{"revision":"2bcb16a03cdc6d1c56a6fbdee8ee2b43","url":"simulation/images/IC7427.png"},{"revision":"6940d77e5933c641c222d381a44ddbb3","url":"simulation/images/IC7432.png"},{"revision":"a47c7723ccc194916b6002d2174206d4","url":"simulation/images/IC7486.png"},{"revision":"a876ee1cb5df7b33f827e09c44850ba5","url":"simulation/images/image 10.png"},{"revision":"b7d4556b3d261f992cd9b8bb193e887b","url":"simulation/images/image 11.png"},{"revision":"edd8647c9bb7cdc9e3a5e93721824267","url":"simulation/images/image 14.png"},{"revision":"0de6f46c5f76241d0206cb464a47f47b","url":"simulation/images/image 15.png"},{"revision":"cd9f44c67f87ce90bc87b190fe4d1454","url":"simulation/images/image 19.png"},{"revision":"adadda47ef938561f0dd4d5b3b03a679","url":"simulation/images/image 20.png"},{"revision":"17e7f246a5c1bb1d33784e99cf4c915d","url":"simulation/images/image 24.png"},{"revision":"bc1ecb13deb370ef3336fa42daad75d7","url":"simulation/images/image 26.png"},{"revision":"eb385ae46c2eb65f08d7637a0496af17","url":"simulation/images/image 3.png"},{"revision":"6df340c1daedd0e14330795c21f65d68","url":"simulation/images/image 6.png"},{"revision":"b4f2db44bc76339b070f9da95e161f1e","url":"simulation/images/image 7.png"},{"revision":"2ee99e7c042fb291dde208c5c87d2bdb","url":"simulation/images/image1ins.png"},{"revision":"0c57d8d17fa22399c3074f79b06ac696","url":"simulation/images/image2ins.png"},{"revision":"1e16a72b803a5072cd4178bec558f7df","url":"simulation/images/image4ins.png"},{"revision":"56fc3834971700360bec2336713620a9","url":"simulation/images/in2AndGate1.png"},{"revision":"7e8cfda21d891b315c401e9cd42389d2","url":"simulation/images/in2AndGate2.png"},{"revision":"676142ceebce6576bbe635da237232de","url":"simulation/images/in2AndGate3.png"},{"revision":"6622b783fa5a13f2ebcba0d449e6b15d","url":"simulation/images/in2AndGate4.png"},{"revision":"3af97d744382dbf222f5d043750bbd66","url":"simulation/images/in2NandGate1.png"},{"revision":"78a0300c046612dc9ba2c39e1643f4dd","url":"simulation/images/in2NandGate2.png"},{"revision":"63bff8c18560c660f3a14040f986d88f","url":"simulation/images/in2NandGate3.png"},{"revision":"5e3cd218dcd093966bd3fa9a62880da9","url":"simulation/images/in2NandGate4.png"},{"revision":"ce4ce284808960bccb8ebefad8e7228b","url":"simulation/images/in2NorGate1.png"},{"revision":"50a26d489d55b976047ee3d830514bce","url":"simulation/images/in2NorGate2.png"},{"revision":"aee2f2faadc981674c7bf60e2e328676","url":"simulation/images/in2NorGate3.png"},{"revision":"2b4cad35ea1cdd3201e379b211af5e03","url":"simulation/images/in2NorGate4.png"},{"revision":"f3aa9d62f7690e40673cecab3f861e20","url":"simulation/images/in2OrGate1.png"},{"revision":"88d864343b457bebe79b8147ec33eac9","url":"simulation/images/in2OrGate2.png"},{"revision":"63f78e09e55f970ed58f7aeba35a793e","url":"simulation/images/in2OrGate3.png"},{"revision":"f500c42fe96dd50e73febde802dcade2","url":"simulation/images/in2OrGate4.png"},{"revision":"676731bed7eaeb382a9489bf55ca7bea","url":"simulation/images/in2XnorGate1.png"},{"revision":"2be83c42041ad02e886ea8a835bf544e","url":"simulation/images/in2XnorGate2.png"},{"revision":"b2d507f65ec2d9dd58538874f220eb4a","url":"simulation/images/in2XnorGate3.png"},{"revision":"41cd64c72cf9d8763ac811e284171ef9","url":"simulation/images/in2XnorGate4.png"},{"revision":"4937658e2c97045babeb762911b94508","url":"simulation/images/in2XorGate1.png"},{"revision":"bdbe7d6a36b20c4a099d27fa8ed8e991","url":"simulation/images/in2XorGate2.png"},{"revision":"761b4b06f57a06b2fb55e999cb845022","url":"simulation/images/in2XorGate3.png"},{"revision":"2125acd3ef0751bbccb6a05e6934e2c7","url":"simulation/images/in2XorGate4.png"},{"revision":"7321fb89ae65b1a14d2317adc276b61e","url":"simulation/images/in3AndGate1.png"},{"revision":"1c1f41ddc6c8e4021d2a9a6d1cf4afa9","url":"simulation/images/in3AndGate2.png"},{"revision":"04bd9712eb06acf50430d9e5c31d2eaf","url":"simulation/images/in3AndGate3.png"},{"revision":"bbd364a86dfd1e9829feae144272d951","url":"simulation/images/in3NandGate1.png"},{"revision":"030f0c8e62074c19b4e9667f8ff31072","url":"simulation/images/in3NandGate2.png"},{"revision":"281367e1f20763d0d6265a67262a85fa","url":"simulation/images/in3NandGate3.png"},{"revision":"5a120f33948d8e4213e0c0bad206840b","url":"simulation/images/in3NorGate1.png"},{"revision":"87b3a110595ff83146699158c91dee7a","url":"simulation/images/in3NorGate2.png"},{"revision":"aa36bb98b0ee7322fb6919422d5133a6","url":"simulation/images/in3NorGate3.png"},{"revision":"3acc507a7b817181b2ec53d698c6f6c4","url":"simulation/images/in3OrGate1.png"},{"revision":"1a4e2ad0951d10b2f77a81df9cc7e95b","url":"simulation/images/in3OrGate2.png"},{"revision":"92f5c3daf2754d5dcbfe34857230c89e","url":"simulation/images/in3OrGate3.png"},{"revision":"28be50ac671922459f812c36ba7b2363","url":"simulation/images/ledoff.png"},{"revision":"1870fc7e43d9b2c91f2034dfc930e6aa","url":"simulation/images/NotGate1.png"},{"revision":"783f21de73dd033c7a08cd8311e74c39","url":"simulation/images/NotGate2.png"},{"revision":"9e2912fc0f837092e19638e13d766b82","url":"simulation/images/NotGate3.png"},{"revision":"56e38c2d5d6385486f5ef5b3197dafc2","url":"simulation/images/NotGate4.png"},{"revision":"9bfd69c7b6af4a5100022cca8872dc7b","url":"simulation/images/NotGate5.png"},{"revision":"4858503e3aa00c849daf939235d1f59c","url":"simulation/images/NotGate6.png"},{"revision":"74ce89745e50ee087fd0de60515b7d91","url":"simulation/images/Power1.png"},{"revision":"74ce89745e50ee087fd0de60515b7d91","url":"simulation/images/Power2.png"},{"revision":"74ce89745e50ee087fd0de60515b7d91","url":"simulation/images/Power3.png"},{"revision":"18c0e652b21180443a7cb405a70ac285","url":"simulation/images/ptm.png"},{"revision":"3530035fca1e6bf5fdc221173aae3205","url":"simulation/images/resistance1.png"},{"revision":"be6c6790f0985946c1334b905411bc58","url":"simulation/images/resistance2.png"},{"revision":"71728cb92ff708f2b170b829ac18bb96","url":"simulation/images/resistance3.png"},{"revision":"812b64236afff7837a2f1ef04afcee48","url":"simulation/images/resistance4.png"},{"revision":"199884b05cecf5ae91c4d571ffaceedd","url":"simulation/images/supply.png"},{"revision":"75e473fdfd83ececf2a6efd83236165c","url":"simulation/images/supply1.png"},{"revision":"9d52b7bb7cf9d7429586ddb52f5331ca","url":"simulation/images/toggleoff1.png"},{"revision":"57e218b0c03a74e5b0af7d6c11ebac0b","url":"simulation/images/toggleon.png"},{"revision":"f86efcdcb8ee47c7aa392b9144ecffe9","url":"simulation/index.html"},{"revision":"c0cad58f958c967912d024bbd714323e","url":"simulation/js/excanvas.js"},{"revision":"704a770f41287e904f2a086a1101bf67","url":"simulation/js/graph.js"},{"revision":"b8d64d0bc142b3f670cc0611b0aebcae","url":"simulation/js/jquery-latest.js"},{"revision":"0315d19da36d139861a6f5dca6587786","url":"simulation/js/jquery-ui-latest.js"},{"revision":"23c7c5d2d1317508e807a6c7f777d6ed","url":"simulation/js/jquery.js"},{"revision":"a966826f960e9ccd1450f85ec7b8bfe2","url":"simulation/js/jquery.jsPlumb-1.3.9-all-min.js"},{"revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a","url":"simulation/js/jquery.min.js"},{"revision":"fd69ee6e1f307f7e9f628f02e40e4bfd","url":"simulation/js/jquery.slim.js"},{"revision":"fb8409a092adc6e8be17e87d59e0595e","url":"simulation/js/jquery.slim.min.js"},{"revision":"de2856ea93f53cd0d2f26bcc8fb36c34","url":"simulation/js/jsplumb.js"},{"revision":"99545f272f99bb4862f6ecc4f96e8bbc","url":"simulation/js/jsplumb.min.js"},{"revision":"5949bb3fddf97edde6b77fc492b0a0d7","url":"simulation/js/package-lock.json"},{"revision":"ac1ed92a3b2c0c74a732f01fdac4660b","url":"simulation/js/package.json"},{"revision":"6ffbd8ce7871dc3d35acbbd2fa5044b4","url":"simulation/js/script.js"},{"revision":"31dbbe124b9951a0976f93c61450ebe4","url":"simulation/js/script1.js"},{"revision":"9a85e3343762f71b3eead5e133bff935","url":"simulation/js/segment-display.js"},{"revision":"17b4d792d7daef2d91ad97a1afcc2dd1","url":"simulation/js/sizzle.js"},{"revision":"334886649236c65c797a6aa32b398ff6","url":"simulation/js/sizzle.min.js"},{"revision":"d158cde170fdcd4374d74429463ed85b","url":"theory.html"},{"revision":"f880915df68bfb226e9d2b0123916320","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );