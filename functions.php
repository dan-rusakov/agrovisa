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
