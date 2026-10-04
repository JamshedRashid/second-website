CREATE TABLE `demo_orders` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`items` text NOT NULL,
	`total` integer NOT NULL,
	`status` text DEFAULT 'Demo received' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `inventory` (
	`id` text PRIMARY KEY NOT NULL,
	`status` text DEFAULT 'Confirm stock' NOT NULL,
	`price` integer,
	`quantity` integer DEFAULT 0 NOT NULL,
	`updated_at` text NOT NULL
);
