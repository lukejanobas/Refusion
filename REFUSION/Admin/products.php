<?php  

include('../middleware/adminMiddleware.php');
include('includes/header.php'); 


?>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>
                        Products
                    </h4>
                </div>
                <div class="card-body" id="products_table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                                $products = getAll("products");
                                if(mysqli_num_rows($products) > 0)
                                {
                                    foreach($products as $item)
                                    {
                                        ?>
                                         <tr>
                                            <td> <?= $item['id'];  ?></td>
                                            <td> <?= $item['name']; ?></td>
                                            <td>
                                                <img src="../uploads/<?= $item['image']; ?>" width="50px" height="50px" alt="<?= $item['name']; ?>">
                                            </td>
                                            <td>
                                            <?= $item['status'] == '0'? "Visible":"Hidden" ?>
                                            </td>

                                            <td>
                                                <a href="edit-product.php?id=<?= $item['id']; ?>" class="btn btn-sm btn-primary">Edit</a>
                                               
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-danger delete_product_btn" value="<?= $item['id']; ?>">Delete</button>
                                            </td>
                            
                                            
                                           
                                            
                                         </tr>
                                        <?php
                                    }
                                }
                                else
                                {
                                    echo "No records found";
                                }
                            ?>
                           
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
    </div>
</div>

<?php  include('includes/footer.php'); ?>
