import fs from "fs";
import { readData } from "./prac.js";
const data=[  { title: "Tile", subtitle: "subTitle" ,pic:"https://picsum.photos/id/1/200",category:["hrtrending","latest","intemple"] ,desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus"},
{ title: "Captain", subtitle: "subTitle",pic:"https://picsum.photos/id/22/200" ,category:[,"latest","intemple",],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Sparrow", subtitle: "subTitle",pic:"https://picsum.photos/id/33/200",category:["trending","latest",],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Atlas Specified", subtitle: "subTitle",pic:"https://picsum.photos/id/3/200",category:["trending","latest","intemple"],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Django", subtitle: "subTitle",pic:"https://picsum.photos/id/4/200",category:["hrtrending","trending","latest",],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Lorem Ipsum", subtitle: "subTitle",pic:"https://picsum.photos/id/8/200",category:["latest","intemple"],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Dikjastre", subtitle: "subTitle",pic:"https://picsum.photos/id/10/100",category:["trending","latest"],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Sparrow", subtitle: "subTitle",pic:"https://picsum.photos/id/55/300",category:["trending","latest","intemple",],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Lorem Ipsum", subtitle: "subTitle",pic:"https://picsum.photos/id/60/200",category:["latest","intemple",'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Piyano Siblima", subtitle: "subTitle",pic:"https://picsum.photos/id/5/200",category:["trending","latest","intemple"],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Captain", subtitle: "subTitle",pic:"https://picsum.photos/id/5/200",category:["trending","intemple"],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },

{ title: "Lorem Ipsum", subtitle: "subTitle",pic:"https://picsum.photos/id/8/200",category:["intemple"],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Dikjastre", subtitle: "subTitle",pic:"https://picsum.photos/id/10/100",category:["hrtrending","trending",'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Sparrow", subtitle: "subTitle",pic:"https://picsum.photos/id/55/200",category:["trending","intemple",'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Lorem Ipsum", subtitle: "subTitle",pic:"https://picsum.photos/id/60/200",category:["hrtrending","intemple",'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Piyano Siblima", subtitle: "subTitle",pic:"https://picsum.photos/id/5/200",category:["trending",,'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Captain", subtitle: "subTitle",pic:"https://picsum.photos/id/5/200",category:[,'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },

{ title: "Lorem Ipsum", subtitle: "subTitle",pic:"https://picsum.photos/id/8/200",category:["mostPopular"],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Dikjastre", subtitle: "subTitle",pic:"https://picsum.photos/id/10/100",category:["hrtrending",'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Sparrow", subtitle: "subTitle",pic:"https://picsum.photos/id/55/200",category:["hrtrending",'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Lorem Ipsum", subtitle: "subTitle",pic:"https://picsum.photos/id/60/200",category:["hrtrending","latest",,'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Piyano Siblima", subtitle: "subTitle",pic:"https://picsum.photos/id/5/200",category:["latest",,'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },
{ title: "Captain", subtitle: "subTitle",pic:"https://picsum.photos/id/44/200",category:["hrtrending","latest",,'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },


 { title: "Lorem Ipsum", subtitle: "subTitle",pic:"https://picsum.photos/id/1/200" ,category:["hrtrending","latest",'mostPopular'],desc:"orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel facilisis libero, ut tempor nulla. Nullam at semper dui. Duis volutpat volutpat aliquam. Fusce quis imperdiet nulla, in porttitor metus. Cras in malesuada dolor, molestie volutpat enim. Vestibulum semper dui ut magna vehicula accumsan. Curabitur et justo et mi laoreet tempus" },]

export const getData = async (request, responce) => {
  try {


  



    responce.status(200).json(data);
  } catch(error) {
//if error occured
console.log(">>>>error.message>",error.message)

    responce.status(400).json({ message: error.message});

  }
};
