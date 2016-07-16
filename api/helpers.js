/**
 * Handle Error
 * @param {object} res http response
 * @param {number} status http status code
 * @param {string} message error message
 * @example
 * ```
 * router.get('/:id', (req, res) => {
 *   handleError(res, 400, 'not found!');
 * });
 * ```
 */
const handleError = (res, status, message) => {
  res.status(status).send({ error: { status, message } });
};


module.exports = {
  handleError
};
