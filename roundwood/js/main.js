// var danishGal = $('#danish-fusion .collection-item a');
// var modernGal = $('#modern-fusion .collection-item a');
// var organicGal = $('#organic-fusion .collection-item a');
// var asianGal = $('#asian-fusion .collection-item a');
// var reclaimedGal = $('#reclaimed-fusion .collection-item a');
//
// var galleryArr = [danishGal, modernGal, organicGal, asianGal, reclaimedGal];

// $.each(galleryArr, function(index, val){
//     this.magnificPopup({
//       type:'image',
//       gallery: {
//           enabled: true
//       },
//       titleSrc: 'title'
//     });
// })

$('.image-overlay').magnificPopup({
      type:'image',
      gallery: {
          enabled: true
      },
      titleSrc: 'title'
    });

// $('.image-hover-overlay').hover(
//     function(){
//         $(this).removeClass('visibility-hidden');
//         console.log('slayer');
//     },
//     function(){
//         $(this).addClass('visibility-hidden');
//     }
// );



// $('.collection-item').hover(
//     function(){
//
//         var overlayHref = $(this).data().href;
//
//         var overlayTitle = $(this).data().title;
//
//         // var linkTag = '<a href="' + overlayHref + '"></a>';
//         // console.log('linkTag', linkTag);
//
//         var imgOverlay = '<div class="image-hover-overlay">' + overlayTitle + '</div>';
//         console.log("imgOverlay: ", imgOverlay);
//
//         $(this).append( $(imgOverlay) )
//         .magnificPopup({
//             items: {
//                 src: overlayHref
//             },
//               type:'image',
//               gallery: {
//                   enabled: true
//               },
//               image: {
//                   titleSrc: function(){
//                       return overlayTitle;
//                   }
//               }
//
//             });
//
//
//     },
//     function(){
//         $( this ).find( "div:last" ).remove();
//         // $(this).remove( $('<div class="image-hover-overlay"></div>'))
//     }
// );
