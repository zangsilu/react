require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//引入json图片
var imageDatas = require('../data/imageDatas.json');
console.log(imageDatas)

/**
 * 通过json文件获取图片的真实路径(自执行函数写法)
 */
let imageInfo = (
        function getImageUrl(imageDatas)
        {
            //遍历数组
            for(var i=0;i<imageDatas.length;i++){
                imageDatas[i].imageUrl=require('../images/'+imageDatas[i].fileName);
            }
           return imageDatas;
        })(imageDatas);


/**
 * 单一图片组件
 */
let Img = React.createClass({
    render : function(){
        return (
            <figure>
                <img src={this.props.data.imageUrl} title={this.props.data.title} />
                <figcaption>
                    {this.props.data.desc}
                </figcaption>
            </figure>
        )
    }
});

/**
 * 页面主体
 */
class AppComponent extends React.Component {
  render() {

      var imgs = [];//用于存放单一图片组件的数组
      var controller = [];
      //将单一图片组件追加到数组中,并传个值给组件,在组件中可使用this.props.data 获取到
      imageInfo.forEach(function(val){
          imgs.push(<Img data = {val}/>)
      })


    return (
        <section className="stage">
            <section className="img-sec">
                {imgs}
            </section>
            <nav className="controller-nav">
                {controller}
            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
