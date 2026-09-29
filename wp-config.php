<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'yeix' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<]91`|VO>}<^|T>WhVy>n;3ln1|cL,/XN*39eb:~Fag/9nrqa[co]8noiy`rf_C<' );
define( 'SECURE_AUTH_KEY',  'yvCm[c=;_  eC7,Qr?=Z[]LGcKzOFNbR5g&o{k(%7814E@cog/?C1+t`EAP?e+@G' );
define( 'LOGGED_IN_KEY',    'UI`~gwaO<]O]2G&.!Y.Aut5lnOg||Zz(-4|-HX|K?Gn.tkl:?y,*v(g.9^ RM^6I' );
define( 'NONCE_KEY',        'ZPH7|O($z=dQVr{{wHIUOL^[KVKD0b|lX+`=d*~(XH=v*Y^Yg&RG#wa_dS3X/~x$' );
define( 'AUTH_SALT',        'm9j^{Rv-VQi:RU$1OKy`^#_1&8U/2<VBUZ=^9(|YOf~ $zwrYTDP*-uF-?+>H0[:' );
define( 'SECURE_AUTH_SALT', '>ON HNK{|3(>%%+2?#ZV2Bfb#:3Jp(T~Lu$|n5DF5u^-u)WPb!5(<eg1|SPJCG$}' );
define( 'LOGGED_IN_SALT',   '4`v[3&4Iq<PUYe%5D@CX4y.>|kSyrk$=)-n<T#<nzZ;xWlT`OtwKiodJ}Z^z=I#a' );
define( 'NONCE_SALT',       '-c]x?]t@6,<t$7F&PO0cp{ w7SXvxd!^PMqe8[Au^CtJBZ~MwT;Vp<QxGScGm%<K' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
