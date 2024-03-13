export const formatDate = (dateCreated: string) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateCreated);

    const day = ('0' + date.getDate()).slice(-2);
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    const year = date.getFullYear();

    return `${day} ${month}. ${year}`;
}