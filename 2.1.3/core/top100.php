<?
####################################
#
# COPYRIGHT BY Sebastian Harke 2010
#
####################################
?>
<div id="cat_seiten">
<h1><?=$p_title?></h1>
<?=$p_content?>
<?  
$pageurl="".$cat."/".$mod."";
$limit="10";
$orderby="ratinglink";
get_top100($cat);
?>
<br />
</div>

<div id="cont_box">
<a href="seite-eintragen/1.html" rel="nofollow"><img src="templates/<?=get_aktiv_layout_data(layout_path);?>images/addsite.jpg" border="0" alt="Seite Anmelden Webkatalog" /></a>
<br /><br />
</div>
<br /><br />