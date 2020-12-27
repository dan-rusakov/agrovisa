<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

// Load scripts
function load_vue_scripts() {
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-js',
		get_stylesheet_directory_uri() . '/dist/scripts/index.js',
		array( 'jquery' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/index.js' ),
		true
	);

	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css',
		get_stylesheet_directory_uri() . '/dist/styles.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/styles.css' )
	);
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

/* ACF settings
----------------------------------------- */

function acf_load_region_select_field( $field ) {

    $field['choices'] = array();

    if( have_rows('regions') ) {
        while( have_rows('regions') ) {

            the_row();

            $value = get_sub_field('name');
            $field['choices'][ $value ] = $value;

        }
    }

    return $field;
}

add_filter('acf/load_field/name=region_select', 'acf_load_region_select_field');

function acf_load_elevator_select_field( $field ) {

    $field['choices'] = array();

    if( have_rows('elevators') ) {
        while( have_rows('elevators') ) {

            the_row();

            $value = get_sub_field('name');
            $field['choices'][ $value ] = $value;

        }
    }

    return $field;
}

add_filter('acf/load_field/name=elevator_select', 'acf_load_elevator_select_field');

function acf_load_product_select_field( $field ) {

    $field['choices'] = array();

    if( have_rows('products') ) {
        while( have_rows('products') ) {

            the_row();

            $value = get_sub_field('name');
            $field['choices'][ $value ] = $value;

        }
    }

    return $field;
}

add_filter('acf/load_field/name=product_select', 'acf_load_product_select_field');

// Content editor settings

function remove_h1_from_editor( $settings ) {
    $settings['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6';
    return $settings;
}

add_filter( 'tiny_mce_before_init', 'remove_h1_from_editor' );

/* Emails sending
----------------------------------------- */
add_filter('wp_mail_content_type', create_function('', 'return "text/html";'));

function feedback(WP_REST_Request $request)
{
    $name = $request->get_param('name');
    $phone_email = $request->get_param('phone_email');
    $message = $request->get_param('message');

    if (empty($name)) {
        wp_send_json(['status' => 422, "message" => 'Не заполнено имя'], 422);
    }

    if (empty($phone_email)) {
        wp_send_json(['status' => 422, "message" => 'Не заполнен номера телефона или email'], 422);
    }

    $email = 'info@agrovisa.ru';
    $subject = 'Новая заявка с сайта';
    $message_for_user = '
        <div style="max-width: 580px; width: 100%;">
          <div style="padding: 20px; background-color: #FFCB53;">
            <h1 style="font-family: Arial, sans-serif; color: #2F2F2F; font-size: 24px; text-align: center; margin: 0;">
              Заявка на обратную связь
            </h1>
          </div>
          <div style="padding: 30px 0;">
            <p style="font-family: Arial, sans-serif; color: #2F2F2F; font-size: 16px">
              <b>Имя: </b>
              <span>'.$name.'</span>
            </p>
            <p style="font-family: Arial, sans-serif; color: #2F2F2F; font-size: 16px">
              <b>Телефон/email: </b>
              <span>'.$phone_email.'</span>
            </p>
            <p style="font-family: Arial, sans-serif; color: #2F2F2F; font-size: 16px">
              <b>Сообщение: </b>
              <span>'.$message.'</span>
            </p>
          </div>
        </div>
    ';

    wp_mail(
        $email,
        $subject,
        $message_for_user,
    );

    wp_send_json(['status' => 200, 'data' => ['message' => 'Sent successfully']], 200);
}

add_action('rest_api_init', function () {
    register_rest_route('api', '/feedback', array(
        'methods' => 'POST',
        'callback' => 'feedback',
    ));
});

function feedback_phone(WP_REST_Request $request)
{
    $phone = $request->get_param('phone');

    if (empty($phone)) {
        wp_send_json(['status' => 422, "message" => 'Не заполнен номера телефона'], 422);
    }

    $email = 'info@agrovisa.ru';
    $subject = 'Новая заявка с сайта';
    $message_for_user = '
        <div style="max-width: 580px; width: 100%;">
          <div style="padding: 20px; background-color: #FFCB53;">
            <h1 style="font-family: Arial, sans-serif; color: #2F2F2F; font-size: 24px; text-align: center; margin: 0;">
              Заявка на обратную связь
            </h1>
          </div>
          <div style="padding: 30px 0;">
            <p style="font-family: Arial, sans-serif; color: #2F2F2F; font-size: 16px">
              <b>Телефон: </b>
              <span>'.$phone.'</span>
            </p>
          </div>
        </div>
    ';

    wp_mail(
        $email,
        $subject,
        $message_for_user,
    );

    wp_send_json(['status' => 200, 'data' => ['message' => 'Sent successfully']], 200);
}

add_action('rest_api_init', function () {
    register_rest_route('api', '/feedback-phone', array(
        'methods' => 'POST',
        'callback' => 'feedback_phone',
    ));
});

/* Hide menu items for manager
----------------------------------------- */

function hide_menu_items() {
    if (!current_user_can('manage_options')) {
        remove_menu_page('edit-comments.php');
		remove_menu_page('edit.php');
		remove_menu_page('tools.php');
    }
}

add_action('admin_menu', 'hide_menu_items', 999);
