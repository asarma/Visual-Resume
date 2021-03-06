
// other is an array
// other[0] is the type of SO contribution
// other[1] is the month of the SO contribution
function tile(source, type, tag, other, fromID,qother,islegend)
{
	console.log("Function: tile()");
	console.log("Argument 1: " + source);
	console.log("Argument 2: " + type);
	console.log("Argument 3: " + tag);
	console.log("Argument 4: " + other);
	console.log("Argument 5: " + fromID);
	
	var tileID = "";
	var ptileID="";
	var othert="";
	if(other!=undefined){
	if(islegend=="legend"){
		var firstd=other[0].getFullYear()+"-"+other[0].getMonth();
		var secondd=other[1].getFullYear()+"-"+other[1].getMonth();
		othert=firstd+"--"+secondd;
	}
	else{
		othert=other[1];
	}
	}
	
	d3.json(source,function(error,data)
	{
		if(type === "so_all")
		{
			tileID = "so_" + data.id + "_tile";
		}
		else if(type ==="so_tag")
		{
			// Some finangling to get the 'tag' to the correct format as a string
			String(tag);
			var tmp = get_strip(tag);
			var tagID = set_strip(tag);
			tileID = "so_" + data.id + "_" + tagID + "_tile";
		}	
		else if(type === "so")
		{
			tileID = "so_general_tile";
		}
		else if(type === "gh_all")
		{
			tileID = "gh_" + data.id + "_tile";
		}
		else if(type === "gh_repo")
		{
			tileID = "gh_" + data.id + "_" + set_strip(tag) + "_tile";
		}
		else if(type === "so_otherTags")
		{
			tileID = "so_" + data.id + "_" + "otherTags_tile";
		}
		else if(type === "gh_otherLanguages")
		{
			tileID = "gh_" + data.id + "_" + "otherLanguages_tile";
		}
		else if(type === "gh_otherRepos")
		{
			tileID = "gh_" + data.id + "_" + "otherRepos_tile";
		}
		else if(type === "gh_languages")
		{
			tileID = "gh_" + data.id + "_" + set_strip(tag) + "_languages_tile";
		}
		else if(type === "gh_activity_detail")
		{
			if(tag == undefined)
			{
				tileID = "gh_" + data.id + "_"+qother+"_" + othert + "_tile";
			}
			else
			{
				tileID = "gh_" + data.id + "_" + set_strip(tag) + "_"+qother+"_" + othert + "_tile";
			}
		}
		else if(type === "gh_comments")
		{
			if(tag == undefined)
			{
				tileID = "gh_" + data.id + "_comments_" + othert + "_tile";
			}
			else
			{
				tileID = "gh_" + data.id + "_" + set_strip(tag) + "_comments_" + othert + "_tile";
			}
		}
		else if(type === "gh_issues")
		{
			if(tag == undefined)
			{
				tileID = "gh_" + data.id + "_issues_" + othert + "_tile";
			}
			else
			{
				tileID = "gh_" + data.id + "_" + set_strip(tag) + "_issues_" + othert + "_tile";
			}
		}
		else if(type === "gh_quality_issues")
		{
			if(tag == undefined)
			{
				tileID = "gh_" + data.id + "_tile_quality_issues";
				ptileID="gh_" + data.id + "_tile";
			}
			else
			{
				var temp=get_strip(tag);
				var tempt=temp.replace("/","-");
				tileID = "gh_" + data.id + "_" + set_strip(tempt) + "_tile_quality_issues";//
				ptileID="gh_" + data.id + "_" + set_strip(tempt) + "_tile";//
			}
		}
		else if(type === "gh_commits")
		{
			if(tag == undefined)
			{
				tileID = "gh_" + data.id + "_commits_" + othert + "_tile";
			}
			else
			{
				tileID = "gh_" + data.id + "_" + set_strip(tag) + "_commits_" + othert + "_tile";
			}
		}
		else if(type === "gh_quality_commits")
		{
			if(tag == undefined)
			{
				tileID = "gh_" + data.id + "_tile_quality_commits";
				ptileID="gh_" + data.id + "_tile";
			}
			else
			{
				var temp=get_strip(tag);
				var tempt=temp.replace("/","-");
				tileID = "gh_" + data.id + "_" + set_strip(tempt) + "_tile_quality_commits";//
				ptileID="gh_" + data.id + "_" + set_strip(tempt) + "_tile";//
			}
		}
		else if(type === "so_questions")
		{
			if(tag == undefined)
			{
				tileID = "so_" + data.id + "_questions_" + othert + "_tile";
			}
			else
			{
				tileID = "so_" + data.id + "_" + set_strip(tag) + "_questions_" + othert + "_tile";
			}
		}
		else if(type === "so_answers")
		{
			if(tag == undefined)
			{
				tileID = "so_" + data.id + "_tile_quality_answers";
				ptileID="so_" + data.id + "_tile";
			}
			else
			{
				tileID = "so_" + data.id + "_" + set_strip(tag) + "_tile_quality_answers";
				ptileID="so_" + data.id + "_" + set_strip(tag) + "_tile";
			}
		}
		else if(type === "so_quality_answers")
		{
			if(tag == undefined)
			{
				tileID = "so_" + data.id + "_tile_quality_answers";
				ptileID="so_" + data.id + "_tile";
			}
			else
			{
				tileID = "so_" + data.id + "_" + set_strip(tag) + "_tile_quality_answers";
				ptileID="so_" + data.id + "_" + set_strip(tag) + "_tile";
			}
		}
		else if(type === "so_comments")
		{
			if(tag == undefined)
			{
				tileID = "so_" + data.id + "_comments_" + othert + "_tile";
			}
			else
			{
				tileID = "so_" + data.id + "_" + set_strip(tag) + "_comments_" + othert + "_tile";
			}
		}
		else if(type === "so_activity_detail")
		{
			if(tag == undefined)
			{
				tileID = "so_" + data.id + "_"+qother+"_" + othert + "_tile";
			}
			else
			{
				tileID = "so_" + data.id + "_" + set_strip(tag) + "_"+qother+"_" + othert + "_tile";
			}
		}
		
		var tileEl = document.getElementById(tileID);
		if(tileEl == null)
		{
			var coordinates = new Array();
			var temp_i = 0;
			console.log("from ID: " + fromID);
			if(fromID != null && fromID != undefined)
			{
				//shift_tiles(fromID);
				
				global_coordinates.forEach(function(d, i)
					{
						if(d.id == fromID)
						{
							coordinates[0] = global_coordinates[i+1].top;
							coordinates[1] = global_coordinates[i+1].left;
							temp_i = i + 1;
							//break;
						}
					});
				if(global_coordinates[temp_i].occupied){
					shift_tiles(fromID);
				}
			}
			else
			{
				coordinates[0] = global_coordinates[0].top;
				coordinates[1] = global_coordinates[0].left;
				temp_i = 0;
				if(global_coordinates[0].occupied){
				var oldcoordinates=new Array();
  				for(var n1=0;n1<30;n1++){
  					oldcoordinates[n1]={
  						id: global_coordinates[n1].id,
  						occupied: global_coordinates[n1].occupied
  					}
  				}

  				for(var n=0;n<30;n++){
  					if(n==0){
  						global_coordinates[n].id=null;
  						global_coordinates[n].occupied=false;
  					}
  					else{
  						global_coordinates[n].id=oldcoordinates[n-1].id;
  						global_coordinates[n].occupied=oldcoordinates[n-1].occupied;
  					}
  				}
				
				for(var i = 0; i < 30; i++)
				{
					if(global_coordinates[i].occupied==true){
					d3.select('#' + global_coordinates[i].id)
            			.style('top', global_coordinates[i].top + 'px')
            			.style('left', global_coordinates[i].left + 'px');
            		}
				}
				}
			}
			
			global_coordinates[temp_i].occupied = true;
			global_coordinates[temp_i].id = tileID;
			//global_oldcoordinates=global_coordinates;
			var drag = d3.behavior.drag()
    					.on("dragstart", dragstarted)
    					.on("drag", dragmove)
    					.on("dragend",dragended);

			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for stackoverflow user all ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			if(type === "so_all")
			{
				d3.select('body')
					.append("div")
					.attr("class","so_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);

				d3.select("#" + tileID)
					.append("div")
					.attr("class","username")
					.attr("id","username_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","info")
					.attr("id","info_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","avatar")
					.attr("id","avatar_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","below_avatar_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","badges")
					.attr("id","badges_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","pieChart_" + tileID);
				
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","stacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","grouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div")
					.attr("id", "legend_" + tileID);
					
				d3.select("#" + tileID)
					.append("hr")
					.attr("class", "separator");
				d3.select("#" + tileID)
					.append("div")
					.attr("class","shortBarChart")
					.attr("id","short_stacked_" + tileID);

				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div_short")
					.attr("id", "legend_short_" + tileID);


				d3.select("#"+tileID)
					.append("div")
					.attr("class","tabs")
					.attr("id","tabs_"+tileID);

				d3.select("#tabs_"+tileID)
					.append("ul")
					.attr("class","tabs_ul")
					.attr("id","tabs_ul_"+tileID);

				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_answer_"+tileID);

				d3.select("#tabs_ul_li_answer_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_answer_"+tileID)
					.html("Answers")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Answers contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_answer_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "so","answers");
                                    		redraw(temp_data, tileID, "stacked","answers");
                                    		redraw(temp_data, tileID, "grouped","answers");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "so");
                							empty_graph(tileID, "grouped", "so");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_question_"+tileID || tabs[x].id == "tabs_socomment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});
				
				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_question_"+tileID);

				d3.select("#tabs_ul_li_question_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_question_"+tileID)
					.html("Questions")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Questions contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_question_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "so","questions");
                                    		redraw(temp_data, tileID, "stacked","questions");
                                    		redraw(temp_data, tileID, "grouped","questions");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "so");
                							empty_graph(tileID, "grouped", "so");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_answer_"+tileID || tabs[x].id == "tabs_socomment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});

				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_socomment_"+tileID);

				d3.select("#tabs_ul_li_socomment_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_socomment_"+tileID)
					.html("Comments")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Comments contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_socomment_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "so","comments");
                                    		redraw(temp_data, tileID, "stacked","comments");
                                    		redraw(temp_data, tileID, "grouped","comments");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "so");
                							empty_graph(tileID, "grouped", "so");
                							}
                            			}  
                        			});
														
								} else if(tabs[x].id == "tabs_answer_"+tileID || tabs[x].id == "tabs_question_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});
				
				userEl = document.getElementById("username_" + tileID);
				infoEl = document.getElementById("info_" + tileID);
				avEl = document.getElementById("avatar_" + tileID);
				infoEl.innerHTML = member_for(data.creationDate);
				
				avEl.innerHTML = "<img class='avatar' src='http://www.gravatar.com/avatar/" + data.avatar + "'>";
			
				d3.select("#" + tileID)
					.append("div")
					.attr("class","icon")
					.html("<a href='javascript:tile(\"" + source + "\", \"so\",null,null,\"" + tileID + "\")'><img class='icon' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-logo.png'></a>");
					
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
								
				d3.select("#username_" + tileID)
					.append("text")
					.html("<a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a>")
					.style('font-size', global_name_font_size);
								
				d3.select("#below_avatar_" + tileID)
					.append("span")
						.attr("class","smallText")
						.html(function()
							{
								return data.website != null ? ("<a href='" + data.website + "' target='_blank'>website</a><br>") : "";
							})
					.append("text")
						.html('<bigger>' + Comma(data.reputation) + '</bigger>')
					.append("span")
						.attr("class","smallText")
						.html(" rep");
					
					// This is a sad, sad way to ensure things don't fire early..
					setTimeout(function()
					{
						legend(tileID, "bar", "so","allactivity");
						setTimeout(function()
						{
							data_format(source, "so_all", null);
							setTimeout(function()
							{
								pie_chart(source, "so_all", null);
							}, global_timeout);
						}, global_timeout);
					}, global_timeout);
					//data_format(source, "so_all", null);
					//legend(tileID, "bar", "so");
					//pie_chart(source, "so_all", null);
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for stackoverflow user all <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for stackoverflow tag-specific ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type ==="so_tag")
			{
				// Some finangling to get the 'tag' to the correct format as a string
				String(tag);
				var tmp = get_strip(tag);
				//String(tag);
				var tagID = set_strip(tag);
				
				d3.select('body')
					.append("div")
					.attr("class","so_tag_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
				
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='so_icon' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png'>>> <img class='small_avatar' src='http://www.gravatar.com/avatar/" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.name;
					});
				
				var tmp_string = data.displayName + ' >> ' + get_strip(tmp);
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var tag_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = tag_length - temp_diff;
								if(temp_end > 0)
								{
									return ' >> <a href="http://stackoverflow.com/search?q=user:' + data.id + '+[' + set_url(tag) + ']' + '" target="_blank">' + tag.substr(0,temp_end) + '..</a>';
								}
							}
							*/
							return ' >> <a href="http://stackoverflow.com/search?q=user:' + data.id + '+[' + set_url(tag) + ']' + '" target="_blank">' + tag + '</a>';
						})
					.attr('title', function(d)
						{
							$(this).tipsy({gravity: 's', html: true, hoverable: false});
							return tmp;	
						});

				d3.select("#" + tileID)
					.append("div")
					.attr("class","tag")
					.attr("id","tag_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","pieChart_" + tileID);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","stacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","grouped_" + tileID)
					.style("display","none")
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div")
					.attr("id", "legend_" + tileID);
				
				d3.select("#" + tileID)
				.append("span")
				.attr("class","close_button")
				.html("&otimes;")
				.on("click",function()
					{
						remove_tile(this, tileID);
					});
				
				d3.select("#username_" + tileID)
				.append("text")
				.html("<a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a>")
				.style("font-size", global_name_font_size);
				
				var temp_tag = set_strip(tag);
				
				tag = get_strip(temp_tag);
				var temp_commentNum = data.tags[tag].commentCount != undefined ? data.tags[tag].commentCount : 0;
				var temp_answerNum = data.tags[tag].answerCount != undefined ? data.tags[tag].answerCount : 0;
				var temp_questionNum = data.tags[tag].questionCount != undefined ? data.tags[tag].questionCount : 0;
				
				d3.select("#tag_" + tileID)
					.append('text')
					.html('Answers: ' + temp_answerNum + '<br>Comments: ' + temp_commentNum + '<br>Questions: ' + temp_questionNum);
				
				d3.select("#" + tileID)
					.append("hr")
					.attr("class", "separator");
				d3.select("#" + tileID)
					.append("div")
					.attr("class","shortBarChart")
					.attr("id","short_stacked_" + tileID);

				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div_short")
					.attr("id", "legend_short_" + tileID);


				d3.select("#"+tileID)
					.append("div")
					.attr("class","tabs")
					.attr("id","tabs_"+tileID);

				d3.select("#tabs_"+tileID)
					.append("ul")
					.attr("class","tabs_ul")
					.attr("id","tabs_ul_"+tileID);

				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_answer_"+tileID);

				d3.select("#tabs_ul_li_answer_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_answer_"+tileID)
					.html("Answers")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Answers contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_answer_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		d3.select("#legend_"+tileID).selectAll('svg').remove();
                                    		legend(tileID, "bar", "so","answers");
                                    		redraw(temp_data, tileID, "stacked","answers");
                                    		redraw(temp_data, tileID, "grouped","answers");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "so");
                							empty_graph(tileID, "grouped", "so");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_question_"+tileID || tabs[x].id == "tabs_socomment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});
				
				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_question_"+tileID);

				d3.select("#tabs_ul_li_question_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_question_"+tileID)
					.html("Questions")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Questions contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_question_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		d3.select("#legend_"+tileID).selectAll('svg').remove();
                                    		legend(tileID, "bar", "so","questions");
                                    		redraw(temp_data, tileID, "stacked","questions");
                                    		redraw(temp_data, tileID, "grouped","questions");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "so");
                							empty_graph(tileID, "grouped", "so");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_answer_"+tileID || tabs[x].id == "tabs_socomment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});

				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_socomment_"+tileID);

				d3.select("#tabs_ul_li_socomment_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_socomment_"+tileID)
					.html("Comments")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Comments contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_socomment_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		d3.select("#legend_"+tileID).selectAll('svg').remove();
                                    		legend(tileID, "bar", "so","comments");
                                    		redraw(temp_data, tileID, "stacked","comments");
                                    		redraw(temp_data, tileID, "grouped","comments");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "so");
                							empty_graph(tileID, "grouped", "so");
                							}
                            			}  
                        			});
														
								} else if(tabs[x].id == "tabs_answer_"+tileID || tabs[x].id == "tabs_question_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});
				
				// This is a sad, sad way to ensure things don't fire early..
				setTimeout(function()
				{
					legend(tileID, "bar", "so","allactivity");
					setTimeout(function()
					{
						data_format(source, "so_tag", tag);
						setTimeout(function()
						{
							pie_chart(source, "so_tag", tag);
						}, global_timeout);
					}, global_timeout);
				}, global_timeout);
				//pie_chart(source, "so_tag", tag);
				//data_format(source, "so_tag", tag);
				//legend(tileID, "bar", "so");
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for stackoverflow tag-specific <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for stackoverflow ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "so")
			{
				d3.select('body')
					.append("div")
					.attr("class","so_general")
					.attr("id","so_general_tile")
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#so_general_tile")
					.append("text")
					.html("<a href='http://stackoverflow.com/' target='_blank'><img class='so_general' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-logo.png'></a><hr>Stack Overflow is <b>a programming Q & A site that's free.</b> Free to ask questions, free to answer questions, free to read, free to index, built with plain old HTML, no fake rot13 text on the home page, no scammy google-cloaking tactics, no salespeople, no JavaScript windows dropping down in front of the answer asking for $12.95 to go away. You can register if you want to collect karma and win valuable flair that will appear next to your name, but otherwise, it's just free. And fast. Very, very fast.");
				
				d3.select("#so_general_tile")
					.append("text")
					.html("<hr><center><table class='so_links'><tr><td colspan='2' style='padding-right:20px'><a href='http://stackoverflow.com/about'>our mission</a></td><td colspan='2'><a href='http://stackexchange.com/about/management'>management</a></td><td colspan='2' style='padding-left:20px'><a href='http://stackexchange.com/about/team'>team</a></td></tr><tr><td colspan='3' style='padding-left:25px'><a href='http://stackexchange.com/about/hiring'>we're hiring</a></td><td colspan='3'><a href='http://stackexchange.com/about/contact'>contact us</a></td></tr></table></center>");
					
				d3.select("#so_general_tile")
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							$(this).parent().empty().remove();
						});
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for stackoverflow <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for all of user's GitHub activity ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_all")
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);

				d3.select("#" + tileID)
					.append("div")
					.attr("class","username")
					.attr("id","username_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","info")
					.attr("id","info_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","avatar")
					.attr("id","avatar_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID)
					.append("text")
					.html(function()
						{
							return data.website != null ? ("<a href='" + data.website + "' target='_blank'><font color='#f0f'>website</font></a><br>") : "";
						})
					.append('text')
					.html("<bigger>" + data.followers + "</bigger>" + " followers");
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","repos_" + tileID)
					.style("display",function()
						{
							if(global_languages === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","languages_" + tileID)
					.style("display",function()
						{
							if(global_languages === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});	
				
				d3.select("#" + tileID)
					.append("div")
					.attr("class","shortBarChart")
					.attr("id","short_stacked_" + tileID);

				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div_short")
					.attr("id", "legend_short_" + tileID);


				d3.select("#" + tileID)
					.append("hr")
					.attr("class", "separator");
				

				d3.select("#"+tileID)
					.append("div")
					.attr("class","tabs")
					.attr("id","tabs_"+tileID);

				d3.select("#tabs_"+tileID)
					.append("ul")
					.attr("class","tabs_ul")
					.attr("id","tabs_ul_"+tileID);
					//.html("<li><a name='tab' id='tab_1' href='javascript:void(0)' onClick='tabs(1)' class='active'>Commits</a></li><li><a name='tab' id='tab_2' href='javascript:void(0)' onClick='tabs(2)'>Issues</a></li>");
				
				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_commit_"+tileID);

				d3.select("#tabs_ul_li_commit_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_commit_"+tileID)
					.html("Commits")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Commits contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_commit_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "gh","commits");
                                    		redraw(temp_data, tileID, "stacked","commits");
                                    		redraw(temp_data, tileID, "grouped","commits");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_issue_"+tileID || tabs[x].id == "tabs_comment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});
				
				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_issue_"+tileID);

				d3.select("#tabs_ul_li_issue_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_issue_"+tileID)
					.html("Issues")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Issues contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_issue_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "gh","issues");
                                    		redraw(temp_data, tileID, "stacked","issues");
                                    		redraw(temp_data, tileID, "grouped","issues");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_commit_"+tileID || tabs[x].id == "tabs_comment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});

				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_comment_"+tileID);

				d3.select("#tabs_ul_li_comment_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_comment_"+tileID)
					.html("Comments")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Comments contributions";
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_comment_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "gh","comments");
                                    		redraw(temp_data, tileID, "stacked","comments");
                                    		redraw(temp_data, tileID, "grouped","comments");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}  
                        			});
														
								} else if(tabs[x].id == "tabs_issue_"+tileID || tabs[x].id == "tabs_commit_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});

				

				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","stacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","grouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div")
					.attr("id", "legend_" + tileID);
				/*
				d3.select("#" + tileID)
					.append("hr")
					.attr("class", "separator");
				*/
					
				userEl = document.getElementById("username_" + tileID);
				infoEl = document.getElementById("info_" + tileID);
				avEl = document.getElementById("avatar_" + tileID);
				folEl = document.getElementById("followers_" + tileID);
				
				infoEl.innerHTML = member_for(data.creationDate);
				avEl.innerHTML = "<img class='avatar' src='" + data.avatar + "'>";
			
				d3.select("#" + tileID)
					.append("div")
					.attr("class","icon")
					.html("<a href='https://github.com/explore' target='_blank'><img class='gh_icon' src='media/gh_logo.png'></a>");
					
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							if (d3.event.defaultPrevented === false) {
							initiatedrag=false;
							close_clicked=true;
							//console.log("close clicked: "+close_clicked);
							remove_tile(this, tileID);
							//console.log("closed tile: "+tileID);
							//close_clicked=false;
							}
						});
								
				d3.select("#username_" + tileID)
					.append("text")
					.html("<a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a>")
					.style("font-size", global_name_font_size)
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
					
					// This is a sad, sad way to ensure things don't fire early..
					setTimeout(function()
					{
						legend(tileID, "bar", "gh","allactivity");
						//legend(tileID, "bar", "gh","tests");
						setTimeout(function()
						{
							data_format(source, "gh");
							setTimeout(function()
							{
								pie_chart(source, "gh", null);
							}, global_timeout);
						}, global_timeout);
					}, global_timeout);
					//pie_chart(source, "gh", null);
					//data_format(source, "gh");
					//legend(tileID, "bar", "gh");
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for all of user's GitHub activity <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's GitHub activity within a repo ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_repo")
			{
				// Some finangling to get the 'tag' to the correct format as a string
				String(tag);
				var tmp = get_strip(tag);
				tmp = tmp.replace("-","/");
				//console.log("repo tile id: "+tileID);
				//console.log("repo tile repo: "+tmp);
				
				d3.select('body')
					.append("div")
					.attr("class","gh_repo_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var repo_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = repo_length - temp_diff;
								if(temp_end > 0)
								{
									return '>> <a href="https://github.com/' + tmp + '/commits?author=' + data.login + '" target="_blank">' + tmp.substr(0,temp_end) + "..</a>";
								}
							}
							*/
							return '>> <a href="' + data.repos[tmp].website + '/commits?author=' + data.login + '" target="_blank">' + tmp + "</a>";
						})
					.attr('title', function(d)
						{
							if(tmp != 'unknown')
							{
								$(this).tipsy({gravity: 's', html: true, hoverable: false});
								return tmp;
							}
						});

				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","info_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","pieChart_" + tileID);

				d3.select("#" + tileID)
					.append("div")
					.attr("class","shortBarChart")
					.attr("id","short_stacked_" + tileID);

				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div_short")
					.attr("id", "legend_short_" + tileID);


				d3.select("#" + tileID)
					.append("hr")
					.attr("class", "separator");
				

				d3.select("#"+tileID)
					.append("div")
					.attr("class","tabs")
					.attr("id","tabs_"+tileID);

				d3.select("#tabs_"+tileID)
					.append("ul")
					.attr("class","tabs_ul")
					.attr("id","tabs_ul_"+tileID);
					//.html("<li><a name='tab' id='tab_1' href='javascript:void(0)' onClick='tabs(1)' class='active'>Commits</a></li><li><a name='tab' id='tab_2' href='javascript:void(0)' onClick='tabs(2)'>Issues</a></li>");

				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_commit_"+tileID);

				d3.select("#tabs_ul_li_commit_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_commit_"+tileID)
					.html("Commits")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Commits contributions in "+tmp;
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_commit_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "gh","commits");
                                    		redraw(temp_data, tileID, "stacked","commits");
                                    		redraw(temp_data, tileID, "grouped","commits");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_issue_"+tileID || tabs[x].id == "tabs_comment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});
				
				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_issue_"+tileID);

				d3.select("#tabs_ul_li_issue_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_issue_"+tileID)
					.html("Issues")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Issues contributions in" + tmp;
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_issue_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "gh","issues");
                                    		redraw(temp_data, tileID, "stacked","issues");
                                    		redraw(temp_data, tileID, "grouped","issues");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}   
                        			});
														
								} else if(tabs[x].id == "tabs_commit_"+tileID || tabs[x].id == "tabs_comment_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});

				d3.select("#tabs_ul_"+tileID)
					.append("li")
					.attr("class","tabs_ul_li")
					.attr("id","tabs_ul_li_comment_"+tileID);

				d3.select("#tabs_ul_li_comment_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","")
					.attr("id","tabs_comment_"+tileID)
					.html("Comments")
					.attr("title",function(){
						$(this).tipsy({gravity: 's'});
						return "Comments contributions in "+tmp;
					})
					.on("click",function(){

						var tabs = document.getElementsByTagName("a");
						for(var x=0; x<tabs.length; x++) {
							name = tabs[x].getAttribute("name");
							if (name == 'tab') {
								if (tabs[x].id == "tabs_comment_"+tileID) {
									tabs[x].className = "active";
									
									d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==tileID){
                                    		legend(tileID, "bar", "gh","comments");
                                    		redraw(temp_data, tileID, "stacked","comments");
                                    		redraw(temp_data, tileID, "grouped","comments");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==tileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}  
                        			});
														
								} else if(tabs[x].id == "tabs_issue_"+tileID || tabs[x].id == "tabs_commit_"+tileID){
									tabs[x].className = "";
								}
							}
						}	  
					});

				
				
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","stacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","grouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div")
					.attr("id", "legend_" + tileID);
				
				
				
					
				userEl = document.getElementById("username_" + tileID);
				//avEl = document.getElementById("avatar_" + tileID);
					
				//avEl.innerHTML = "<img class='avatar' src='" + data.avatar + "'>";
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
				
				var temp_language = data.repos[tmp].language != null ? data.repos[tmp].language : 'unavailable';
					
				var temp_commentNum = data.repos[tmp].commentCount != undefined ? data.repos[tmp].commentCount : 0;
				var temp_commitNum = data.repos[tmp].commitCount != undefined ? data.repos[tmp].commitCount : 0;
				var temp_issueNum = data.repos[tmp].issueCount != undefined ? data.repos[tmp].issueCount : 0;
				
				d3.select("#info_" + tileID)
					.append("text")
					.html('Language: ');
				d3.select("#info_" + tileID)
					.append("text")
					.html(function()
						{
							// If the language name is too long, we'll need to shorten it
							if(temp_language.length > 14)
							{
								return temp_language.substr(0,13) + "..";
							}
							return temp_language;
						})
					.attr('title', function(d)
							{
								$(this).tipsy({gravity: 's', html: true, hoverable: false});
								return temp_language;	
							});
					
				d3.select("#info_" + tileID)
					.append("text")
					.html('<br>Forked: ' + data.repos[tmp].isFork + '<br>Commits: ' + temp_commitNum + '<br>Comments: ' + temp_commentNum + '<br>Issues: ' + temp_issueNum);	
			
				// This is a sad, sad way to ensure things don't fire early..
				setTimeout(function()
				{
					legend(tileID, "bar", "gh","allactivity");
					//legend(tileID, "bar", "gh","tests");
					setTimeout(function()
					{
						data_format(source, "gh_repo", tag);
						setTimeout(function()
						{
							pie_chart(source, "gh_repo", tag);
						}, global_timeout);
					}, global_timeout);
				}, global_timeout);
				//pie_chart(source, "gh_repo", tag);
				//data_format(source, "gh_repo", tag);
				//legend(tileID, "bar", "gh");
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's GitHub activity within a repo <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's "other" tags ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "so_otherTags")
			{			
				d3.select('body')
					.append("div")
					.attr("class","gh_otherTags_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='so_icon' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png'>>> <img class='small_avatar' src='http://www.gravatar.com/avatar/" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.name;
					});
				var tmp = ' >> other tags';
				var tmp_string = data.displayName + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							return tmp;
						});
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","pieChart_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
				
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p><b>Other</b> Tags</p>')
					.style('text-decoration', 'underline');
								
				other.forEach(function(d)
					{
						d3.select("#repo_list_" + tileID)
							.append("text")
							.html('<a href="javascript:tile(\'' + source + '\',\'so_tag\',\'' + d.tag + '\',null,\'' + tileID + '\');">' + d.tag + '</a><br>');
					})
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's "other" tags <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's "other" languages ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_otherLanguages")
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_language_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				var tmp = " >> other languages";
				var tmp_string = data.login + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							return tmp;
						});
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","pieChart_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
				
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p><b>Other</b> Languages</p>')
					.style('text-decoration', 'underline');
						
						
				var otherlangs = new Array();
				
				other.forEach(function(d)
					{
						console.log(d);
						otherlangs.push(d.language);
					});
				
				_.keys(data.repos).forEach(function(d)
					{
						var repo = d;
						String(repo);
						console.log(d);
						
						var temp_total = d.total;
						if($.inArray(data.repos[repo].language, otherlangs) != -1)
						{
							console.log($.inArray(data.repos[repo].language, otherlangs));
							if(temp_total > 0)
							{
								var repofull = repo.replace("/","-");
								d3.select("#repo_list_" + tileID)
									.append("text")
									.html('<a href="javascript:tile(\'' + source + '\',\'gh_repo\',\'' + repofull + '\',null,\'' + tileID + '\');">' + data.repos[repo].owner + '/' + repo + '</a><br>');
							}
							else
							{
								console.log(data);
								d3.select("#repo_list_" + tileID)
									.append("text")
									.style('color', '#bbb')
									.html(repo + '<br>');
							}
						}
					})
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's "other" languages <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's "other" repositories ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_otherRepos")
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_language_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				var tmp = "other repos";
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var repo_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = repo_length - temp_diff;
								if(temp_end > 0)
								{
									return '>> ' + tmp.substr(0,temp_end) + "..";
								}
							}
							*/
							return '>> ' + tmp;
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","pieChart_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
				
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p><b>Other</b> Repositories</p>')
					.style('text-decoration', 'underline');
								
				other.forEach(function(d)
					{
						console.log(d);
						
						var temp_total = d.total;
						if(temp_total > 0)
						{
							var repofull = d.owner + '-' + d.repo;
							d3.select("#repo_list_" + tileID)
								.append("text")
								.html('<a href="javascript:tile(\'' + source + '\',\'gh_repo\',\'' + repofull + '\',null,\'' + tileID + '\');">' + d.owner + '/' + d.repo + '</a><br>');
						}
						else
						{
							d3.select("#repo_list_" + tileID)
								.append("text")
								.style('color', '#bbb')
								.html(d.owner + '/' + d.repo + '<br>');
						}
						
					})
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's "other" repositories <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's repositories by language ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_languages")
			{
				String(tag);
				tag = get_strip(tag);
				var tmp = tag;
				
				d3.select('body')
					.append("div")
					.attr("class","gh_language_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var repo_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = repo_length - temp_diff;
								if(temp_end > 0)
								{
									return '>> ' + tmp.substr(0,temp_end) + "..";
								}
							}
							*/
							return '>> ' + tmp;
						})
					.attr('title', function(d)
						{
							if(tmp != 'unknown')
							{
								$(this).tipsy({gravity: 's', html: true, hoverable: false});
								return tmp;
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","pieChart")
					.attr("id","pieChart_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
			
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p><b>' + tag + '</b> Repositories</p>')
					.style('text-decoration', 'underline');
								
				_.keys(data.repos).forEach(function(d)
					{
						if(tag == 'unknown' && data.repos[d].language == undefined)
						{	
							var temp_total = data.repos[d].commitCount + data.repos[d].issueCount + data.repos[d].commentCount;
							if(temp_total > 0)
							{
								var tmp_repo = d.split('/');
								var repofull = tmp_repo[0] + '-' + tmp_repo[1];
								d3.select("#repo_list_" + tileID)
									.append("text")
									.html('<a href="javascript:tile(\'' + source + '\',\'gh_repo\',\'' + repofull + '\',null,\'' + tileID + '\');">' + d + '</a><br>');
							}
							else
							{
								d3.select("#repo_list_" + tileID)
									.append("text")
									.style('color', '#bbb')
									.html(d + '<br>');
							}
						}
						else if(data.repos[d].language == tag)
						{
							var temp_total = data.repos[d].commitCount + data.repos[d].issueCount + data.repos[d].commentCount;
							if(temp_total > 0)
							{
								var tmp_repo = d.split('/');
								var repofull = tmp_repo[0] + '-' + tmp_repo[1];
								d3.select("#repo_list_" + tileID)
									.append("text")
									.html('<a href="javascript:tile(\'' + source + '\',\'gh_repo\',\'' + repofull + '\',null,\'' + tileID + '\');">' + d + '</a><br>');
							}
							else
							{
								d3.select("#repo_list_" + tileID)
									.append("text")
									.style('color', '#bbb')
									.html(d + '<br>');
							}
						}
					})
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's repositories by language <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's GH comments ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_activity_detail" && qother=="comments")
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_comments_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				if(tag != undefined) {
				 String(tag);
				tag = get_strip(tag);};
				//tag = tmp.replace("-","/"); 
				
				var tmp = tag == undefined ? 'comments' : tag + ' >> comments';
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							return '>> ' + tmp;
						});
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p>Comments for ' + othert + '</p>')
					.style('text-decoration', 'underline');
					
				
				if(tag == undefined)
				{
					_.keys(data.comments).forEach(function(d,i)
					{
						var year=data.comments[d].date.substr(0,4);
				var mon=data.comments[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);
						if((islegend!="legend" && data.comments[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.comments[d].parent_url != '')
										{
											return '<p><a href="' + data.comments[d].parent_url + '#issuecomment-' + data.comments[d].id + '" target="_blank"><b>View Comment</b></p></a><p>' + data.comments[d].body + '</p><hr>';
										}
										else
										{
											return '';
										}
									});
						}
					});
				}
				else
				{
					_.keys(data.comments).forEach(function(d,i)
					{
						var year=data.comments[d].date.substr(0,4);
				var mon=data.comments[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);
						if((islegend!="legend" && data.comments[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.comments[d].parent_url != '')
										{
											//var url_array = data.comments[d].parent_url.split('/');
											//var this_repo = url_array[3] + '/' + url_array[4];
											if(tag == data.comments[d].repo)
											{
												return '<p><a href="' + data.comments[d].parent_url + '#issuecomment-' + data.comments[d].id + '" target="_blank"><b>View Comment</b></p></a><p>' + data.comments[d].body + '</p><hr>';
											}
											else
											{
												return '';
											}
										}
										else
										{
											return '';
										}
									});
						}
					});
				}
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's GH comments <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's GH issues ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_activity_detail" && (qother=="issues" || qother=="close" || qother=="open" || qother=="merged" || qother=="nonmerged"))
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_issues_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				if(tag != undefined) { 
				String(tag);
				tag = get_strip(tag);};
				//tag = tmp.replace("-","/"); 
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				var temp_quality="issues";
				var temp_list_title="Issues for "+othert;
				if(qother=="close"){
					temp_quality="issues quality >> issues closed";
					temp_list_title="Issues are closed for " + othert;
				}
				else if(qother=="open"){
					temp_quality="issues quality >> issues opened";
					temp_list_title="Issues are opened for " + othert;
				}
				else if(qother=="merged" || qother=="nonmerged"){
					temp_quality="issues quality >> pull requests "+qother;
					temp_list_title="Pull requests are "+qother+ " for " + othert;
				}
				if(tag!=undefined){
					temp_list_title=temp_list_title+" in "+tag;
				}
				var tmp = tag == undefined ? temp_quality : tag + ' >> '+temp_quality;
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							return '>> ' + tmp;
						});
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p>' + temp_list_title + '</p>')
					.style('text-decoration', 'underline');
					
				if(tag == undefined)
				{
					_.keys(data.issues).forEach(function(d,i)
					{
						var year=data.issues[d].date.substr(0,4);
				var mon=data.issues[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);
				var mergep = "";
                        
                        if(data.issues[d].ismerged=="true") {
                            mergep = ' ' +' <img src="media/Check_icon_answer.png" class="mini-icon">';
                        } else if(data.issues[d].ismerged=="false") {
                            mergep = ' ' + ' <img src="media/x-mark-256.png" class="mini-icon">';
                        }
						if((islegend!="legend" && data.issues[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.issues[d].url != undefined)
										{
											if(qother=="merged"){
												if(data.issues[d].ismerged=="true"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="nonmerged"){
												if(data.issues[d].ismerged=="false"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="issues"){
												return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
											}
											else if(qother=="open"){
												if(data.issues[d].openclose=="open" || data.issues[d].openclose=="openclose"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="close"){
												if(data.issues[d].openclose=="close" || data.issues[d].openclose=="openclose"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}
										}
										else
										{
											if(qother=="merged"){
												if(data.issues[d].ismerged=="true"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="nonmerged"){
												if(data.issues[d].ismerged=="false"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="issues"){
												return '<p>' + data.issues[d].title + '</p><hr>';
											}
											else if(qother=="open"){
												if(data.issues[d].openclose=="open" || data.issues[d].openclose=="openclose"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="close"){
												if(data.issues[d].openclose=="close" || data.issues[d].openclose=="openclose"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}
											
										}
									});
						}
					});
				}
				else
				{
					tag = get_strip(tag);
					_.keys(data.issues).forEach(function(d,i)
					{
						var year=data.issues[d].date.substr(0,4);
				var mon=data.issues[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);

				var mergep = "";
                        
                        if(data.issues[d].ismerged=="true") {
                            mergep = ' ' +' <img src="media/Check_icon_answer.png" class="mini-icon">';
                        } else if(data.issues[d].ismerged=="false") {
                            mergep = ' ' + ' <img src="media/x-mark-256.png" class="mini-icon">';
                        }
						if((islegend!="legend" && data.issues[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										//var url_array = data.issues[d].url.split('/');
										//var this_repo = url_array[3] + '/' + url_array[4];
										if(tag == data.issues[d].repo)
										{
											if(data.issues[d].url != undefined)
											{
												if(qother=="merged"){
												if(data.issues[d].ismerged=="true"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="nonmerged"){
												if(data.issues[d].ismerged=="false"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="issues"){
												return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
											}
											else if(qother=="open"){
												if(data.issues[d].openclose=="open" || data.issues[d].openclose=="openclose"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="close"){
												if(data.issues[d].openclose=="close"  || data.issues[d].openclose=="openclose"){
													return '<p><a href="' + data.issues[d].url + '" target="_blank"><b>View Issue</b></a>'+mergep+'</p><p>' + data.issues[d].title + '</p><hr>';
												}
											}

											}
											else
											{
												if(qother=="merged"){
												if(data.issues[d].ismerged=="true"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="nonmerged"){
												if(data.issues[d].ismerged=="false"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="issues"){
												return '<p>' + data.issues[d].title + '</p><hr>';
											}
											else if(qother=="open"){
												if(data.issues[d].openclose=="open" || data.issues[d].openclose=="openclose"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}
											else if(qother=="close"){
												if(data.issues[d].openclose=="close" || data.issues[d].openclose=="openclose"){
													return '<p>' + data.issues[d].title + '</p><hr>';
												}
											}

											}
										}
										else
										{
											return '';
										}
									});
						}
					});
				}
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's GH issues <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//

			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's GH issues quality <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //

			else if(type === "gh_quality_issues")
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_quality_issues_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				if(tag != undefined) { tag = get_strip(tag) };
				
				var tmp = tag == undefined ? 'issues quality' : tag + ' >> issues quality';
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							return '>> ' + tmp;
						});
					
				
				
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				

				d3.select("#" + tileID)
					.append("div")
					.attr("class","topquality")
					.attr("id","gh_topquality_" + tileID);

				d3.select("#gh_topquality_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_close_"+tileID)
					.html("Issues are opened or closed by the contributor.");

				d3.select("#" + tileID)
					.append("div")
					.attr("class","topbarChart")
					.attr("id","topstacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","topbarChart")
					.attr("id","topgrouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div_top")
					.attr("id", "toplegend_" + tileID);

				d3.select("#" + tileID)
					.append("hr")
					.attr("class", "quality_separator");

				d3.select("#" + tileID)
					.append("div")
					.attr("class","bottomquality")
					.attr("id","gh_bottomquality_" + tileID);

				d3.select("#gh_bottomquality_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_merge_"+tileID)
					.html("Pull requests are merged by the contributor.");

				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","stacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","grouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div")
					.attr("id", "legend_" + tileID);
					
				
				if(ptileID !== "")
				{
					d3.select("#topgrouped_"+tileID).selectAll('svg').remove();
									d3.select("#topstacked_"+tileID).selectAll('svg').remove();
					d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#toplegend_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==ptileID){
                                    		legend(tileID, "bar", "gh","openclose");
                                    		legend(tileID, "bar", "gh","merge");
                                    		redraw(temp_data, tileID, "stacked","openclose","top","first");
                                    		redraw(temp_data, tileID, "grouped","openclose","top","first");
                                    		redraw(temp_data, tileID, "stacked","merge");
                                    		redraw(temp_data, tileID, "grouped","merge");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==ptileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}   
                        			});
					
					
				}

				
			}

			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's GH commits ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "gh_activity_detail" && (qother=="commits" || qother=="pass" || qother=="fail" || qother=="low" || qother=="median" || qother=="high"))
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_commits_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				if(tag != undefined) { 
				String(tag);
				tag = get_strip(tag);//tag = tmp.replace("-","/");
				 };
				var temp_quality="commits";
				var temp_list_title="Commits for "+othert;
				if(qother=="pass"){
					temp_quality="commits quality >> commits pass tests";
					temp_list_title="Commits passed the tests for " + othert;
				}
				else if(qother=="fail"){
					temp_quality="commits quality >> commits pass tests";
					temp_list_title="Commits failed to pass the tests for " + othert;
				}
				else if(qother=="high"){
					temp_quality="commits quality >> commits very close to the core";
					temp_list_title="Commits are very close to the core for " + othert;
				}
				else if(qother=="median"){
					temp_quality="commits quality >> commits median close to the core";
					temp_list_title="Commits are median close to the core for " + othert;
				}
				else if(qother=="low"){
					temp_quality="commits quality >> commits far from the core";
					temp_list_title="Commits are far from the core for " + othert;
				}
				if(tag!=undefined){
					temp_list_title=temp_list_title+" in "+tag;
				}
				
				var tmp = tag == undefined ? temp_quality : tag + ' >> '+temp_quality;
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							return '>> ' + tmp;
						});
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p>' + temp_list_title + '</p>')
					.style('text-decoration', 'underline');
					
				if(tag == undefined)
				{
					_.keys(data.commits).forEach(function(d,i)
					{
						var year=data.commits[d].date.substr(0,4);
				var mon=data.commits[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);
				var testp = "";
                        
                        if(data.commits[d].state=="success") {
                            testp = ' ' +' <img src="media/Check_icon_answer.png" class="mini-icon">';
                        } else if(data.commits[d].state=="failure" || data.commits[d].state=="error") {
                            testp = ' ' + ' <img src="media/x-mark-256.png" class="mini-icon">';
                        }
						if((islegend!="legend" && data.commits[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.commits[d].url != undefined)
										{
											var url = data.commits[d].url;
											if(url.indexOf("api.")){
												url=url.replace("api.","");
												url=url.replace("repos/","");
												url=url.replace("git/","");
												url=url.replace("commits/","commit/");
											}
											//var api_string = url_array[2].split('.');
											var centr=data.commits[d].centrality;
											//var url = url_array[0] + '/' + url_array[1] + '/' + api_string[1] + '.' + api_string[2] + '/' + url_array[4] + '/' + url_array[5] + '/' + url_array[6].slice(0,-1) + '/' + url_array[7];
											if(qother=="pass"){
												if(data.commits[d].state=="success"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="fail"){
												if(data.commits[d].state=="failure" || data.commits[d].state=="error"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="commits"){
												return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
											}
											else if(qother=="low"){
												
												if(centr=="low"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="median"){
												
												if(centr=="median"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="high"){
												
												if(centr=="high"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
										}
										else
										{
											//var url = 'https://github.com/' + data.commits[d].repo + '/commit/' + data.commits[d].hash;
											//return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</p></a><p>' + data.commits[d].message + '</p><hr>';
											//return '<p><b>Commit URL Missing</b></p><p>' + data.commits[d].message + '</p><hr>';
										}
									});
						}
					});
				}
				else
				{
					tag = get_strip(tag);
					
					_.keys(data.commits).forEach(function(d,i)
					{
						var year=data.commits[d].date.substr(0,4);
				var mon=data.commits[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);
				var testp = "";
                        
                        if(data.commits[d].state=="success") {
                            testp = ' ' +' <img src="media/Check_icon_answer.png" class="mini-icon">';
                        } else if(data.commits[d].state=="failure" || data.commits[d].state=="error") {
                            testp = ' ' + ' <img src="media/x-mark-256.png" class="mini-icon">';
                        }
						if((islegend!="legend" && data.commits[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0))){
						if(data.commits[d].repo == tag)
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.commits[d].url != undefined)
										{
											//var url_array = data.commits[d].url.split('/');
											//var api_string = url_array[2].split('.');
											
											var url = data.commits[d].url;
											if(url.indexOf("api.")){
												url=url.replace("api.","");
												url=url.replace("repos/","");
												url=url.replace("git/","");
												url=url.replace("commits/","commit/");
											}
											
											//var url = url_array[0] + '/' + url_array[1] + '/' + api_string[1] + '.' + api_string[2] + '/' + url_array[4] + '/' + url_array[5] + '/' + url_array[6].slice(0,-1) + '/' + url_array[7];
											//return '<p><a href="' + url + '" target="_blank"><b>View Commit</b>(' + data.commits[d].repo + ')</p></a><p>' + data.commits[d].message + '</p><hr>';
											var centr=data.commits[d].centrality;
											//var url = url_array[0] + '/' + url_array[1] + '/' + api_string[1] + '.' + api_string[2] + '/' + url_array[4] + '/' + url_array[5] + '/' + url_array[6].slice(0,-1) + '/' + url_array[7];
											if(qother=="pass"){
												if(data.commits[d].state=="success"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="fail"){
												if(data.commits[d].state=="failure" || data.commits[d].state=="error"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="commits"){
												return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
											}
											else if(qother=="low"){
												
												if(centr=="low"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="median"){
												
												if(centr=="median"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
											else if(qother=="high"){
												
												if(centr=="high"){
													return '<p><a href="' + url + '" target="_blank"><b>View Commit</b> (' + data.commits[d].repo + ')</a>'+testp+'</p><p>' + data.commits[d].message + '</p><hr>';
												}
											}
										}
										else
										{
											//var url = 'https://github.com/' + tag + '/commit/' + data.commits[d].hash;
											//return '<p><a href="' + url + '" target="_blank"><b>View Commit</b>(' + data.commits[d].repo + ')</p></a><p>' + data.commits[d].message + '</p><hr>';
										}
									});
						}
					}
					});
				}
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's GH commits <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's GH commits quality <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //

			else if(type === "gh_quality_commits")
			{
				d3.select('body')
					.append("div")
					.attr("class","gh_quality_commits_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='gh_icon' src='media/gh_logo.png'> >> <img class='small_avatar' src='" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=https://github.com/" + data.login + "/ target='_blank'>" + data.name + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.login;
					});
				
				if(tag != undefined) { tag = get_strip(tag) };
				
				var tmp = tag == undefined ? 'commits quality' : tag + ' >> commits quality';
				var tmp_string = data.login + ' >> ' + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							return '>> ' + tmp;
						});
					
				
				
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				

				d3.select("#" + tileID)
					.append("div")
					.attr("class","topquality")
					.attr("id","gh_topquality_" + tileID);

				d3.select("#gh_topquality_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_tests_"+tileID)
					.html("Commits pass the test cases.");

				d3.select("#" + tileID)
					.append("div")
					.attr("class","topbarChart")
					.attr("id","topstacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","topbarChart")
					.attr("id","topgrouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div_top")
					.attr("id", "toplegend_" + tileID);

				d3.select("#" + tileID)
					.append("hr")
					.attr("class", "quality_separator");

				d3.select("#" + tileID)
					.append("div")
					.attr("class","bottomquality")
					.attr("id","gh_bottomquality_" + tileID);

				d3.select("#gh_bottomquality_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_core_"+tileID)
					.html("Commits are close to the core of the project.");

				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","stacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","barChart")
					.attr("id","grouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div")
					.attr("id", "legend_" + tileID);
					
				
				if(ptileID !== "")
				{
					d3.select("#topgrouped_"+tileID).selectAll('svg').remove();
									d3.select("#topstacked_"+tileID).selectAll('svg').remove();
					d3.select("#grouped_"+tileID).selectAll('svg').remove();
									d3.select("#stacked_"+tileID).selectAll('svg').remove();
									d3.select("#toplegend_"+tileID).selectAll('svg').remove();
									d3.select("#legend_"+tileID).selectAll('svg').remove();
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==ptileID){
                                    		legend(tileID, "bar", "gh","tests");
                                    		legend(tileID, "bar", "gh","centrality");
                                    		redraw(temp_data, tileID, "stacked","tests","top","first");
                                    		redraw(temp_data, tileID, "grouped","tests","top","first");
                                    		redraw(temp_data, tileID, "stacked","centrality");
                                    		redraw(temp_data, tileID, "grouped","centrality");
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==ptileID){
                            				empty_graph(tileID, "stacked", "gh");
                							empty_graph(tileID, "grouped", "gh");
                							}
                            			}   
                        			});
					
					
				}

				
			}




			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's SO questions ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			else if(type === "so_activity_detail" && qother=="questions")
			{
				d3.select('body')
					.append("div")
					.attr("class","so_questions_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='so_icon' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png'>>> <img class='small_avatar' src='http://www.gravatar.com/avatar/" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.name;
					});
				var tmp = tag == undefined ? 'questions' : tag + ' >> questions';
				var tmp_string = data.displayName + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var tag_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = tag_length - temp_diff;
								if(temp_end > 0)
								{
									//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=questions" target="_blank">' + tmp.substr(0,temp_end) + '..</a>';
									return ' >> ' + tmp;
								}
							}
							*/
							return ' >> ' + tmp;
							//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=questions" target="_blank">' + tmp + '</a>';
						});		
			
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p>Questions for ' + othert + '</p>')
					.style('text-decoration', 'underline');
					
				
				if(tag == undefined)
				{
					_.keys(data.questions).forEach(function(d,i)
					{
						var year=data.questions[d].date.substr(0,4);
				var mon=data.questions[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);

				var postScore = "";
                        var temp_score = parseInt(data.questions[d].score);
                        if(temp_score > 0) {
                            postScore = ' ' +temp_score + ' <img src="media/thumbs_up.png" class="mini-icon">';
                        } else if(temp_score < 0) {
                            postScore = ' ' + temp_score + ' <img src="media/thumbs_down.png" class="mini-icon">';
                        }
                        var commentp="";
                        if(parseInt(data.questions[d].commentCount)>0){
                        	commentp=' '+parseInt(data.questions[d].commentCount)+' <img src="media/comment_bubble.png" class="mini-icon">';
                        }
                        var answerp="";
                        if(parseInt(data.questions[d].answerCount)>0){
                        	answerp=' '+parseInt(data.questions[d].answerCount)+' <img src="media/answer_icon.png" class="mini-icon">'
                        }
						if((islegend!="legend" && data.questions[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.questions[d].id != '')
										{
											return '<p><a href="http://stackoverflow.com/questions/' + data.questions[d].id+ '" target="_blank"><b>View Question</b></a>'+postScore+commentp+answerp+'</p><p>' + data.questions[d].title + '</p><hr>';
										}
										else
										{
											return '';
										}
									});
						}
					});
				}
				else
				{
					_.keys(data.questions).forEach(function(d,i)
					{
						var year=data.questions[d].date.substr(0,4);
				var mon=data.questions[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);

				var postScore = "";
                        var temp_score = parseInt(data.questions[d].score);
                        if(temp_score > 0) {
                            postScore = ' ' +temp_score + ' <img src="media/thumbs_up.png" class="mini-icon">';
                        } else if(temp_score < 0) {
                            postScore = ' ' + temp_score + ' <img src="media/thumbs_down.png" class="mini-icon">';
                        }
                        var commentp="";
                        if(parseInt(data.questions[d].commentCount)>0){
                        	commentp=' '+parseInt(data.questions[d].commentCount)+' <img src="media/comment_bubble.png" class="mini-icon">';
                        }
                        var answerp="";
                        if(parseInt(data.questions[d].answerCount)>0){
                        	answerp=' '+parseInt(data.questions[d].answerCount)+' <img src="media/answer_icon.png" class="mini-icon">'
                        }
						if((islegend!="legend" && data.questions[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.questions[d].id != '')
										{
											//var url_array = data.comments[d].parent_url.split('/');
											var this_repo = data.questions[d].tags;//url_array[3] + '/' + url_array[4];
											if(this_repo.indexOf(tag)>-1)
											{
												return '<p><a href=http://stackoverflow.com/questions/' + data.questions[d].id+ '" target="_blank"><b>View Question</b></a>'+postScore+commentp+answerp+'</p><p>' + data.questions[d].title + '</p><hr>';
											}
											else
											{
												return '';
											}
										}
										else
										{
											return '';
										}
									});
						}
					});
				}

				//get_so(other[0], other[1], data.id, "repo_list_" + tileID, tag);
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's SO questions <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's SO answers ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//else if(type === "so_answers" && tag == undefined)
			else if(type === "so_activity_detail" && (qother=="answers" || qother=="accepted" || qother=="nonaccepted"))
			{
				d3.select('body')
					.append("div")
					.attr("class","so_answers_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='so_icon' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png'>>> <img class='small_avatar' src='http://www.gravatar.com/avatar/" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.name;
					});
				
				var temp_quality="answers";
				var temp_list_title="Answers for "+othert;
				if(qother=="accepted"){
					temp_quality="answers quality >> answers accepted";
					temp_list_title="Answers are accepted for " + othert;
				}
				else if(qother=="nonaccepted"){
					temp_quality="answers quality >> answers not accepted";
					temp_list_title="Answers are not accepted for " + othert;
				}
				
				if(tag!=undefined){
					temp_list_title=temp_list_title+" in "+tag;
				}

				var tmp = tag == undefined ? temp_quality: tag + ' >> '+temp_quality;
				var tmp_string = data.displayName + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var tag_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = tag_length - temp_diff;
								if(temp_end > 0)
								{
									//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=answers" target="_blank">' + tmp.substr(0,temp_end) + '..</a>';
									return ' >> ' + tmp;
								}
							}
							*/
							return ' >> ' + tmp;
							//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=answers" target="_blank">' + tmp + '</a>';
						});
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p>' + temp_list_title + '</p>')
					.style('text-decoration', 'underline');
					
				
				if(tag == undefined)
				{
					_.keys(data.answers).forEach(function(d,i)
					{
						var year=data.answers[d].date.substr(0,4);
				var mon=data.answers[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);

				var postScore = "";
                        var temp_score = parseInt(data.answers[d].score);
                        if(temp_score > 0) {
                            postScore = ' ' +temp_score + ' <img src="media/thumbs_up.png" class="mini-icon">';
                        } else if(temp_score < 0) {
                            postScore = ' ' + temp_score + ' <img src="media/thumbs_down.png" class="mini-icon">';
                        }
                        var commentp="";
                        if(parseInt(data.answers[d].commentCount)>0){
                        	commentp=' '+parseInt(data.answers[d].commentCount)+' <img src="media/comment_bubble.png" class="mini-icon">';
                        }
                        var acceptedp="";
                        if(data.answers[d].accepted=="yes"){
                        	acceptedp=' '+' <img src="media/Check_icon_answer.png" class="mini-icon">'
                        }
						if((islegend!="legend" && data.answers[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.answers[d].id != '')
										{
											if(qother=="answers"){
												return '<p><a href="http://stackoverflow.com/a/' + data.answers[d].id+ '" target="_blank"><b>View Answer</b></a>'+acceptedp+postScore+commentp+'</p><p>' + data.answers[d].body + '</p><hr>';
											}
											else if(qother=="accepted"){
												if(data.answers[d].accepted=="yes"){
													return '<p><a href="http://stackoverflow.com/a/' + data.answers[d].id+ '" target="_blank"><b>View Answer</b></a>'+acceptedp+postScore+commentp+'</p><p>' + data.answers[d].body + '</p><hr>';
												}
											}
											else if(qother=="nonaccepted"){
												if(data.answers[d].accepted!="yes"){
													return '<p><a href="http://stackoverflow.com/a/' + data.answers[d].id+ '" target="_blank"><b>View Answer</b></a>'+acceptedp+postScore+commentp+'</p><p>' + data.answers[d].body + '</p><hr>';
												}
											}
										}
										else
										{
											return '';
										}
									});
						}
					});
				}
				else
				{
					_.keys(data.answers).forEach(function(d,i)
					{
						var year=data.answers[d].date.substr(0,4);
				var mon=data.answers[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);

				var postScore = "";
                        var temp_score = parseInt(data.answers[d].score);
                        if(temp_score > 0) {
                            postScore = ' ' +temp_score + ' <img src="media/thumbs_up.png" class="mini-icon">';
                        } else if(temp_score < 0) {
                            postScore = ' ' + temp_score + ' <img src="media/thumbs_down.png" class="mini-icon">';
                        }
                        var commentp="";
                        if(parseInt(data.answers[d].commentCount)>0){
                        	commentp=' '+parseInt(data.answers[d].commentCount)+' <img src="media/comment_bubble.png" class="mini-icon">';
                        }
                        var acceptedp="";
                        if(data.answers[d].accepted=="yes"){
                        	acceptedp=' '+' <img src="media/Check_icon_answer.png" class="mini-icon">'
                        }
						if((islegend!="legend" && data.answers[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.answers[d].id != '')
										{
											//var url_array = data.comments[d].parent_url.split('/');
											var this_repo = data.answers[d].tags;//url_array[3] + '/' + url_array[4];
											if(this_repo.indexOf(tag)>-1)
											{
											if(qother=="answers"){
												return '<p><a href="http://stackoverflow.com/a/' + data.answers[d].id+ '" target="_blank"><b>View Answer</b></a>'+acceptedp+postScore+commentp+'</p><p>' + data.answers[d].body + '</p><hr>';
											}
											else if(qother=="accepted"){
												if(data.answers[d].accepted=="yes"){
													return '<p><a href="http://stackoverflow.com/a/' + data.answers[d].id+ '" target="_blank"><b>View Answer</b></a>'+acceptedp+postScore+commentp+'</p><p>' + data.answers[d].body + '</p><hr>';
												}
											}
											else if(qother=="nonaccepted"){
												if(data.answers[d].accepted!="yes"){
													return '<p><a href="http://stackoverflow.com/a/' + data.answers[d].id+ '" target="_blank"><b>View Answer</b></a>'+acceptedp+postScore+commentp+'</p><p>' + data.answers[d].body + '</p><hr>';
												}
											}
											}
											else
											{
												return '';
											}
										}
										else
										{
											return '';
										}
									});
						}
					});
				}

				//get_so(other[0], other[1], data.id, "repo_list_" + tileID, tag);
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's SO answers <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Start draw tile for user's SO answers quality <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //

			else if(type === "so_quality_answers")
			{
				d3.select('body')
					.append("div")
					.attr("class","so_quality_answers_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='so_icon' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png'>>> <img class='small_avatar' src='http://www.gravatar.com/avatar/" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.name;
					});
				
				

				var tmp = tag == undefined ? 'answers quality' : tag + ' >> answers quality';
				var tmp_string = data.displayName + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var tag_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = tag_length - temp_diff;
								if(temp_end > 0)
								{
									//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=answers" target="_blank">' + tmp.substr(0,temp_end) + '..</a>';
									return ' >> ' + tmp;
								}
							}
							*/
							return ' >> ' + tmp;
							//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=answers" target="_blank">' + tmp + '</a>';
						});
					
				
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","topquality")
					.attr("id","gh_topquality_" + tileID);

				d3.select("#gh_topquality_"+tileID)
					.append("a")
					.attr("name","tab")
					.attr("class","active")
					.attr("id","tabs_accepted_"+tileID)
					.html("Answers are accepted by the question submitters.");

				d3.select("#" + tileID)
					.append("div")
					.attr("class","topbarChart")
					.attr("id","topstacked_" + tileID)
					.style("display",function()
						{
							if(global_grouped === false)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class","topbarChart")
					.attr("id","topgrouped_" + tileID)
					.style("display",function()
						{
							if(global_grouped === true)
							{
								return "block";
							}
							else
							{
								return "none";
							}
						});
				d3.select("#" + tileID)
					.append("div")
					.attr("class", "legend_div_top")
					.attr("id", "toplegend_" + tileID);

				
				
				if(ptileID !== "")
				{
					d3.select("#topgrouped_"+tileID).selectAll('svg').remove();
									d3.select("#topstacked_"+tileID).selectAll('svg').remove();
					
									d3.select("#toplegend_"+tileID).selectAll('svg').remove();
									
									global_data.forEach(function(d)
                        			{
                            			var temp_data = d[0];
                            			var temp_tileID = d[1];
                            			if(global_date_range!=null){
                            				
                            				var cf = crossfilter(temp_data);
                            				set_date_range(temp_data);
                            				var cf = cf.dimension(function(d) { return d.fullDate; });
                            				var temp_data = cf.filterRange([global_date_range[0],global_date_range[1]]).top(Infinity);
                            			
 
                                  		if(temp_tileID==ptileID){
                                    		d3.select("#toplegend_"+tileID).selectAll('svg').remove();
                                    		legend(tileID, "bar", "so","accepted");                                   		
                                    		redraw(temp_data, tileID, "stacked","accepted","top","first");
                                    		redraw(temp_data, tileID, "grouped","accepted","top","first");
                                    		
                            			} 
                            			}
                            			else{
                            				if(temp_tileID==ptileID){
                            				empty_graph(tileID, "stacked", "so");
                							empty_graph(tileID, "grouped", "so");
                							}
                            			}   
                        			});
					
					
				}
				
			}


			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// Begin draw tile for user's SO comments ==>
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			//else if(type === "so_comments" && tag == undefined)
			else if(type === "so_activity_detail" && qother=="comments")
			{
				d3.select('body')
					.append("div")
					.attr("class","so_comments_user_tile")
					.attr("id",tileID)
					.style('top', coordinates[0] + 'px')
					.style('left', coordinates[1] + 'px')
					.call(drag);
					
				d3.select("#" + tileID)
					.append("div")
					.attr("class","breadcrumbs")
					.attr("id","breadcrumbs_" + tileID)
					.append('text')
					.html("<img class='so_icon' src='http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png'>>> <img class='small_avatar' src='http://www.gravatar.com/avatar/" + data.avatar + "'> ");
					
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(" <a href=http://stackoverflow.com/users/" + data.id + "/ target='_blank'>" + data.displayName + "</a> ")
					.attr("title",function(d)
					{
						$(this).tipsy({gravity: 's', html: true, hoverable: false});
						return data.name;
					});
				var tmp = tag == undefined ? 'comments' : tag + ' >> comments';
				var tmp_string = data.displayName + tmp;
				d3.select("#breadcrumbs_" + tileID)
					.append("text")
					.html(function(d)
						{
							/*
							// If the repo title is too long, we'll need to shorten it
							if(tmp_string.length > 28)
							{
								var tag_length = tmp.length;
								var temp_diff = tmp_string.length - 28;
								var temp_end = tag_length - temp_diff;
								if(temp_end > 0)
								{
									//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=comments" target="_blank">' + tmp.substr(0,temp_end) + '..</a>';
									return ' >> ' + tmp;
								}
							}
							*/
							//return ' >> <a href="http://stackoverflow.com/users/' + data.id + '?tab=comments" target="_blank">' + tmp + '</a>';
							return ' >> ' + tmp;
						});
				
				d3.select("#" + tileID)
					.append("div")
					.attr("class","below_avatar")
					.attr("id","followers_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos_title")
					.attr("id","repo_list_title_" + tileID);
				d3.select("#" + tileID)
					.append("div")
					.attr("class","repos")
					.attr("id","repo_list_" + tileID);
				
				d3.select("#" + tileID)
					.append("span")
					.attr("class","close_button")
					.html("&otimes;")
					.on("click",function()
						{
							remove_tile(this, tileID);
						});
					
				d3.select("#repo_list_title_" + tileID)
					.append("text")
					.html('<p>Comments for ' + othert + '</p>')
					.style('text-decoration', 'underline');
					
				
				if(tag == undefined)
				{
					_.keys(data.comments).forEach(function(d,i)
					{
						var year=data.comments[d].date.substr(0,4);
				var mon=data.comments[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);

				var postScore = "";
                        var temp_score = parseInt(data.comments[d].score);
                        if(temp_score > 0) {
                            postScore = ' ' +temp_score + ' <img src="media/thumbs_up.png" class="mini-icon">';
                        } else if(temp_score < 0) {
                            postScore = ' ' + temp_score + ' <img src="media/thumbs_down.png" class="mini-icon">';
                        }
						if((islegend!="legend" && data.comments[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.comments[d].postid != '')
										{
											return '<p><a href="http://stackoverflow.com/questions/' + data.comments[d].postid +'/#comment'+data.comments[d].id+'_'+data.comments[d].postid+ '" target="_blank"><b>View Comment</b></a>'+postScore+'</p><p>' + data.comments[d].body + '</p><hr>';
										}
										else
										{
											return '';
										}
									});
						}
					});
				}
				else
				{
					_.keys(data.comments).forEach(function(d,i)
					{
						var year=data.comments[d].date.substr(0,4);
				var mon=data.comments[d].date.substr(5,7)-1;
				var ddate=new Date(year,mon);

				var postScore = "";
                        var temp_score = parseInt(data.comments[d].score);
                        if(temp_score > 0) {
                            postScore = ' ' +temp_score + ' <img src="media/thumbs_up.png" class="mini-icon">';
                        } else if(temp_score < 0) {
                            postScore = ' ' + temp_score + ' <img src="media/thumbs_down.png" class="mini-icon">';
                        }
						if((islegend!="legend" && data.comments[d].date == other[1]) || (islegend=="legend" && (ddate-other[0]>0 && ddate-other[1]<0)))
						{
							d3.select('#repo_list_' + tileID)
								.append('text')
								.html(function()
									{
										if(data.comments[d].postid != '')
										{
											//var url_array = data.comments[d].parent_url.split('/');
											var this_repo = data.comments[d].tags;//url_array[3] + '/' + url_array[4];
											if(this_repo.indexOf(tag)>-1)
											{
												return '<p><a href=http://stackoverflow.com/questions/' + data.comments[d].postid +'/#comment'+data.comments[d].id+'_'+ data.comments[d].postid + '" target="_blank"><b>View Comment</b></a>'+postScore+'</p><p>' + data.comments[d].body + '</p><hr>';
											}
											else
											{
												return '';
											}
										}
										else
										{
											return '';
										}
									});
						}
					});
				}

				//get_so(other[0], other[1], data.id, "repo_list_" + tileID, tag);
			}
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			// End draw tile for user's SO comments <==
			// ===== ===== ===== ===== ===== ===== ===== ===== ===== //
			
			else { console.log("Unknown data type parameter passed to tile()"); }
		}
		});
	}