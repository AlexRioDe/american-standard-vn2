<?php
  function dp($name){
    return get_post_meta(get_the_ID(), $name, true);
  }
  global $page, $tvOption;
  $page = 'bundles';
  include ABSPATH . '/wp-content/themes/att-promo-seo/att-tv-redirect.php';
  $attTvAvailable ? $tvOption = 'AT&T TV' : $tvOption = 'U-verse TV';
  $businessClickout = 'https://tracking.centerfield.com/?a=101590&c=105421';
  $wirelessClickout = 'https://tracking.centerfield.com/?a=101592&c=105870&s20=58123';

  function dashNum($phone) {
    $numbers_only = preg_replace("/[^\d]/", "", $phone);
    return preg_replace("/^1?(\d{3})(\d{3})(\d{4})$/", "$1-$2-$3", $numbers_only);
  }
  if(isset($_COOKIE['transfer_number']) && !isset($_COOKIE['1t1number'])) {
    $advertiser['phone'] = dashNum($_COOKIE['transfer_number']);
    $advertiser['ringpool'] = "";
  }
  if(isset($_COOKIE['phoneurl']) && isset($_COOKIE['1t1number'])) {
    $advertiser['ringpool'] = "";
  }
  if(!empty($_GET['phone'])) {
    $advertiser['phone'] = filter_var($_GET['phone'], FILTER_SANITIZE_NUMBER_INT);
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php wp_title(); ?></title>
  <?php include ABSPATH . "/wp-content/themes/global-theme-assets/head_scripts.php";?>
  <?php include 'css-files.php'; ?>
  <?php wp_head(); ?>
</head>
<body>
  <input id="customfield1" name="customfield1" type="hidden" value="<?php echo $SEM_DATA['dnis']; ?>" />
  <div id="overlay" class="overlay"></div>
  <?php
    include ABSPATH . '/wp-content/themes/att-promotions-com/p1-test/nice-alerts/new-alerts.php';
    include 'sections/header.php';
    include 'sections/thanks.php';
    include 'sections/footer.php';
  ?>
  <script src="<?php bloginfo('stylesheet_directory'); ?>/p1-test/dist/js/lazy.js" async></script>
</body>
</html>