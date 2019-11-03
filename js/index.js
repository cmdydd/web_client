$(document).ready(function(){


var func_select = "" // 定义执行的函数

function init_h(argument) {
		$("ul.list h3").css("background-color","#FDFEFE");
		$("ul.list h3").css("color","black");
		$("#result").empty()
		$("#fileP").empty()
		$("#strat").css("display","none");
		$("#fileP").css("display","none");
}

var filePath = ""
$("#upButton").click(function () {
	$("#uploadFile").click();

	$("#uploadFile").on("change", function () {
		if (uploadFile.files[0]==undefined){
			alert('未上传文件！');
		}else{
			$("#fileP").css("display","block");
			filePath=uploadFile.files[0].name
			var reader = new FileReader();//新建一个FileReader
            reader.readAsText(uploadFile.files[0], "UTF-8");//读取文件 
            reader.onload = function(evt){ //读取完文件之后会回来这里
                var fileString = evt.target.result; // 读取文件内容
                var table = dealFile(fileString)
                $("#fileP").append(table)
                $("#strat").css("display","block");
        	}
		}	
    });
});

//将文件处理成表格格式
function dealFile(data) {
	var ret = "<table cellspacing=\"0\" style=\"border: 1px solid #AAAAAA;\">";
	var arraylist = data.split('\n',300)
	for(var i = 0, len = arraylist.length; i < len; i++){
		ret +="<tr>"
	   	var array = arraylist[i].split(',')
   		for (var j = 0,lenJ=array.length;j<lenJ;j++){
   			ret +="<td style=\"border: 1px solid #AAAAAA;text-align: center; padding :2px; color:black;\">"
   			ret += array[j];
   			ret +="</td>"
   		}
   		ret+="</tr>"
	}
	ret += "</table>"
	return ret
}

var txt_decision = "决策树算法属于监督学习算法中的一种，是根据选取数据中有区分度的特征来实现分类。采用多分支决策树，以基尼指数最小作为分类评价标准，对七类特征分布维度相同，但数据量分布不平衡的雷达脉冲数据进行分选，使用雷达脉冲描述字作为分选特征，并显示出每个特征在分选过程中的重要性百分比，并采用十折交叉验证模型泛化能力，将分选结果以混淆矩阵形式。";
var txt_GBOT = "GBDT（gradient boosting decision tree）即梯度提升决策树算法，该算法由决策树算法和梯度提升模型组合而成。GBDT算法也属于集成学习算法中的一种，分类结果是根据基学习器的权值形式进行结合。对七类特征分布维度相同，但数据量分布不平衡的雷达脉冲数据进行分选。使用雷达脉冲描述字作为分选特征，由于其基学习为决策树，可显示出每个特征在分选过程中的重要性百分比，并采用十折交叉验证模型泛化能力，最后将分选结果以混淆矩阵形式";
var txt_random = "随机森林算法是集成学习算法中的一种，它的基学习器是决策树。随机森林算法是将得到基学习器分类结果投票数最多的类作为分类最终结果。对七类特征分布维度相同，但数据量分布不平衡的雷达脉冲数据进行分选。使用雷达脉冲描述字作为分选特征，由于基学习为决策树，可显示出每个特征在分选过程中的重要性百分比，并采用十折交叉验证模型泛化能力，最后将分选结果以混淆矩阵形式。";
var txt_FCM = "FCM";
var txt_dbscan = "DBSCAN";
var txt_kmeans = "kmeans";
var txt_smote = "本次实验使用SMOTE算法扩充小样本。SMOTE算法全称是Synthetic Minority Oversampling Technique即合成少数类过采样技术，SMOTE算法针对的是类不平衡问题，类不平衡是指在训练分类器中所使用的训练集的类别分布不均。算法及基本思想是对少数类样本进行分析并根据少数类样本人工合成新样本添加到数据集中，利用 k 近邻算法来分析已有的少数类样本，从而合成在特征空间内的新少数类样本。概括起来就是在少数样本之间进行插值来产生额外的样本。";
var txt_smote_sort = "本次实验将用SMOTE算法扩充后样本合成新的雷达数据集作为数据来源，分别使用决策树、随机森林、KNN三种机器学习算对雷达数据集进行分选，使用雷达脉冲描述字作为分选特征，分别使用小样本扩充前后雷达数据进行信号分选，最后，以折线图直观的展示出小样本扩充前后分选准确率的对比，以此说明SMOTE算法能够提高小样本环境下雷达信号分选准确率。";

$("#h1").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_decision);
	$("#upButton").css("display","block");
	func_select = ""
});

$("#h2").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_GBOT);
	$("#upButton").css("display","block");
	func_select = ""
});

$("#h3").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_random);
	$("#upButton").css("display","block");
	func_select = ""
});

$("#h4").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_FCM);
	$("#upButton").css("display","block");
});


$("#h5").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_dbscan);
	$("#upButton").css("display","block");
});

$("#h6").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_kmeans);
	$("#upButton").css("display","block");
});

$("#h7").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_smote);
	$("#upButton").css("display","block");
	func_select = "expansion_data"
});

$("#h8").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt_smote_sort);
	$("#upButton").css("display","block");
	func_select ="smote_compare"
});

$("#h9").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt2);
	$("#upButton").css("display","block");
});

$("#h10").click(function (argument) {
	init_h()
	$(this).css("background-color","#F8C471");
	$(this).css("color","white");
	$("#test").html(txt);
	$("#upButton").css("display","block");
});

$("#strat").click(function (argument) {
	send(func_select)
})

function send(message) {
	$.ajax({
 		url:"http://127.0.0.1:8080",
        type: "get",
        data: {
          	"name":message
      	},
     	success: function (msg) {
     		$("#result").css("display","block");
     		array = msg.split("&")
     		if(array[0] == "expansion_data"){
				deal_data_get(array[1])
     		}else if (array[0] == "smote_compare"){
     			deal_smote_compare(array[1])
     		}
			
     	},
     	error: function (returnValue) {
     		alert("对不起！数据加载失败！");
		}
	});
}

// 处理后端传回来的数据
function deal_data_get(data) {
	var arra = data.split('\n')
	for(var i =0, len = arra.length;i < len -1; i++ ){
		ret ="<p style=\"border:none ;border-radius: 1ex;margin:1px;padding: 1px;\">" +arra[i] +"</p>"
		$("#result").append(ret)
		
	}

}

// 算法对比
function deal_smote_compare(data) {
	var arra = data.split('\n')
	for(var i =0, len = arra.length;i < len; i++ ){
		ret = "<img src="+arra[i]+" style=\"width :52%\">"
		$("#result").append(ret)
		
	}
	
	
}

function cmd_sleep(num) {
	var start = new Date().getTime(); 
    while (new Date().getTime() < start + num);
}

});
