import { createStyle } from "../chart/utils/style";

const css = `
  .app {
      box-sizing: border-box;
      min-width: 600px;
      min-height: 100%;
   }
   .app__container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
   }
   
   .content{
    display: flex;
    margin: 0 -15px;
   }
   .content__left{
   padding: 0 15px;
   width: 100%;
   max-width: 200px;
   }
     .content__right{
        padding: 0 15px;
      flex-grow: 2;
   }
   .left-btn{
    margin-top: 12px;
   }
   .left-btn__first{
   margin-top: 0;
   }
   .right-select{
         display: flex;
         width: 100%;
   }
`;

export default createStyle(css);
