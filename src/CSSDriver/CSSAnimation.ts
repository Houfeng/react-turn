import { ICSSAnimation } from "./ICSSAnimation";

export const CSSAnimation: ICSSAnimation[] = [
  { leave: "turn-moveToLeft", enter: "turn-moveFromRight" },
  { leave: "turn-moveToRight", enter: "turn-moveFromLeft" },
  { leave: "turn-moveToTop", enter: "turn-moveFromBottom" },
  { leave: "turn-moveToBottom", enter: "turn-moveFromTop" },
  //
  { leave: "turn-fade", enter: "turn-moveFromRight turn-ontop" },
  { leave: "turn-fade", enter: "turn-moveFromLeft turn-ontop" },
  { leave: "turn-fade", enter: "turn-moveFromBottom turn-ontop" },
  { leave: "turn-fade", enter: "turn-moveFromTop turn-ontop" },
  //
  { leave: "turn-moveToLeftFade", enter: "turn-moveFromRightFade" },
  { leave: "turn-moveToRightFade", enter: "turn-moveFromLeftFade" },
  { leave: "turn-moveToTopFade", enter: "turn-moveFromBottomFade" },
  { leave: "turn-moveToBottomFade", enter: "turn-moveFromTopFade" },
  //
  { leave: "turn-moveToLeftEasing turn-ontop", enter: "turn-moveFromRight" },
  { leave: "turn-moveToRightEasing turn-ontop", enter: "turn-moveFromLeft" },
  { leave: "turn-moveToTopEasing turn-ontop", enter: "turn-moveFromBottom" },
  { leave: "turn-moveToBottomEasing turn-ontop", enter: "turn-moveFromTop" },
  //
  { leave: "turn-scaleDown", enter: "turn-moveFromRight turn-ontop" },
  { leave: "turn-scaleDown", enter: "turn-moveFromLeft turn-ontop" },
  { leave: "turn-scaleDown", enter: "turn-moveFromBottom turn-ontop" },
  { leave: "turn-scaleDown", enter: "turn-moveFromTop turn-ontop" },
  //
  { leave: "turn-scaleDown", enter: "turn-scaleUpDown turn-delay300" },
  { leave: "turn-scaleDownUp", enter: "turn-scaleUp turn-delay300" },
  //
  { leave: "turn-moveToLeft turn-ontop", enter: "turn-scaleUp" },
  { leave: "turn-moveToRight turn-ontop", enter: "turn-scaleUp" },
  { leave: "turn-moveToTop turn-ontop", enter: "turn-scaleUp" },
  { leave: "turn-moveToBottom turn-ontop", enter: "turn-scaleUp" },
  //
  { leave: "turn-scaleDownCenter", enter: "turn-scaleUpCenter turn-delay400" },
  //
  {
    leave: "turn-rotateRightSideFirst",
    enter: "turn-moveFromRight turn-delay200 turn-ontop"
  },
  {
    leave: "turn-rotateLeftSideFirst",
    enter: "turn-moveFromLeft turn-delay200 turn-ontop"
  },
  {
    leave: "turn-rotateTopSideFirst",
    enter: "turn-moveFromTop turn-delay200 turn-ontop"
  },
  {
    leave: "turn-rotateBottomSideFirst",
    enter: "turn-moveFromBottom turn-delay200 turn-ontop"
  },
  //
  { leave: "turn-flipOutRight", enter: "turn-flipInLeft turn-delay500" },
  { leave: "turn-flipOutLeft", enter: "turn-flipInRight turn-delay500" },
  { leave: "turn-flipOutTop", enter: "turn-flipInBottom turn-delay500" },
  { leave: "turn-flipOutBottom", enter: "turn-flipInTop turn-delay500" },
  //
  { leave: "turn-rotateFall turn-ontop", enter: "turn-scaleUp" },
  {
    leave: "turn-rotateOutNewspaper",
    enter: "turn-rotateInNewspaper turn-delay500"
  },
  //
  { leave: "turn-rotatePushLeft", enter: "turn-moveFromRight" },
  { leave: "turn-rotatePushRight", enter: "turn-moveFromLeft" },
  { leave: "turn-rotatePushTop", enter: "turn-moveFromBottom" },
  { leave: "turn-rotatePushBottom", enter: "turn-moveFromTop" },
  //
  { leave: "turn-rotatePushLeft", enter: "turn-rotatePullRight turn-delay180" },
  { leave: "turn-rotatePushRight", enter: "turn-rotatePullLeft turn-delay180" },
  { leave: "turn-rotatePushTop", enter: "turn-rotatePullBottom turn-delay180" },
  { leave: "turn-rotatePushBottom", enter: "turn-rotatePullTop turn-delay180" },
  //
  { leave: "turn-rotateFoldLeft", enter: "turn-moveFromRightFade" },
  { leave: "turn-rotateFoldRight", enter: "turn-moveFromLeftFade" },
  { leave: "turn-rotateFoldTop", enter: "turn-moveFromBottomFade" },
  { leave: "turn-rotateFoldBottom", enter: "turn-moveFromTopFade" },
  //
  { leave: "turn-moveToRightFade", enter: "turn-rotateUnfoldLeft" },
  { leave: "turn-moveToLeftFade", enter: "turn-rotateUnfoldRight" },
  { leave: "turn-moveToBottomFade", enter: "turn-rotateUnfoldTop" },
  { leave: "turn-moveToTopFade", enter: "turn-rotateUnfoldBottom" },
  //
  {
    leave: "turn-rotateRoomLeftOut turn-ontop",
    enter: "turn-rotateRoomLeftIn"
  },
  {
    leave: "turn-rotateRoomRightOut turn-ontop",
    enter: "turn-rotateRoomRightIn"
  },
  { leave: "turn-rotateRoomTopOut turn-ontop", enter: "turn-rotateRoomTopIn" },
  {
    leave: "turn-rotateRoomBottomOut turn-ontop",
    enter: "turn-rotateRoomBottomIn"
  },
  //
  {
    leave: "turn-rotateCubeLeftOut turn-ontop",
    enter: "turn-rotateCubeLeftIn"
  },
  {
    leave: "turn-rotateCubeRightOut turn-ontop",
    enter: "turn-rotateCubeRightIn"
  },
  { leave: "turn-rotateCubeTopOut turn-ontop", enter: "turn-rotateCubeTopIn" },
  {
    leave: "turn-rotateCubeBottomOut turn-ontop",
    enter: "turn-rotateCubeBottomIn"
  },
  //
  {
    leave: "turn-rotateCarouselLeftOut turn-ontop",
    enter: "turn-rotateCarouselLeftIn"
  },
  {
    leave: "turn-rotateCarouselRightOut turn-ontop",
    enter: "turn-rotateCarouselRightIn"
  },
  {
    leave: "turn-rotateCarouselTopOut turn-ontop",
    enter: "turn-rotateCarouselTopIn"
  },
  {
    leave: "turn-rotateCarouselBottomOut turn-ontop",
    enter: "turn-rotateCarouselBottomIn"
  },
  //
  { leave: "turn-rotateSidesOut", enter: "turn-rotateSidesIn ts-delay200" },
  { leave: "turn-rotateSlideOut", enter: "turn-rotateSlideIn" },
  { leave: "turn-fade turn-ontop", enter: "turn-fade ts-delay200" }
];
