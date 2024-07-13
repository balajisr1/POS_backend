/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("create_user_table", (table) => {
            table.increments("id").primary()
            table.string("name"),
                table.timestamp("created_at").defaultTo(knex.fn.now())
            table.timestamp("updated_at").defaultTo(knex.fn.now())
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("create_user_table")
};
