import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    const { slug } = ctx.query;

    if (slug) {
      const entity = await strapi.db.query('api::article.article').findOne({
        where: { slug },
      });

      if (!entity) {
        return ctx.notFound();
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } else {
      const entities = await strapi.db.query('api::article.article').findMany();
      const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
      return this.transformResponse(sanitizedEntities);
    }
  },
}));
