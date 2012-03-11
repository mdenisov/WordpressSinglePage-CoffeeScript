<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
<meta http-equiv="X-UA-Compatible" content="chrome=IE7" />
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style/boilerplate.css" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style/fonts.css" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="application/atom+xml" title="<?php bloginfo('name'); ?> Atom Feed" href="<?php bloginfo('atom_url'); ?>" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<script src="<? bloginfo('stylesheet_directory') ?>/scripts/app.js"></script>
<script>require('initialize');</script>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>

<!-- Pre-required Scripts  -->
<!-- <script charset="utf-8" src="http://widgets.twimg.com/j/2/widget.js"></script> -->

<!-- ShareThis Scripts  -->
<script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "ur-7d38fe7d-fe5b-4820-584-7fbf33c3113a"}); </script>

<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

<?php wp_head(); ?>

<!--[if !IE 7]>
	<style type="text/css">
		
	</style>
<![endif]-->

</head>
<body>
	
<!-- !--[if IE]>
<script type="text/javascript" 
 src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>

<style>
 .chromeFrameInstallDefaultStyle {
   width: 100%; /* default is 800px */
   border: 5px solid blue;
 }
</style>

<div id="prompt">
 <!-- if IE without GCF, prompt goes here -->
 
</div>
<![endif]--> -->
	
<!-- BEGIN #container -->
<div id="container">
	
	<!-- BEGIN #content-page -->
	<div id="content-page">
		
		
	</div>
	<!-- END #content-page -->
</div>
<!-- END #container -->

</body>
</html>
