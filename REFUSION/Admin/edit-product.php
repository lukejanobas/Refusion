<?php  

include('includes/header.php'); 
include('../middleware/adminMiddleware.php');

?>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <?php

                if(isset($_GET['id']))
                {
                    
               
                    $id = $_GET['id'];
                    $product = getByID("products",$id);

                    if(mysqli_num_rows($product) > 0)
                    {
                        $data = mysqli_fetch_array($product);
                        ?>
                            <div class="card">
                                <div class="card-header">
                                    <h4>Edit Product
                                    <a href="products.php" class="btn btn-primary float-end">Back</a>

                                    </h4>
                                </div>
                                    <div class="card-body">
                                        <form action="code.php" method="POST" enctype="multipart/form-data">
                                            <div class="row"> 
                                                <div class="col-md-12">
                                                    <label for="">Select Category</label>
                                                    <select name="category_id" class="form-select mb-2" >
                                                        <option selected>Select Category</option>
            
                                                        <?php 
                                                            $categories = getAll("categories");
            
                                                            if(mysqli_num_rows($categories) > 0)
                                                            {
                                                                foreach ($categories as $item) {
                                                                    ?>
                                                                    <option value="<?= $item['id']; ?>" <?= $data['category_id'] == $item['id']?'selected':''?> >   <?= $item['name']; ?></option>
                                                                    <?php
                                                                }
                                                            }
                                                            else
                                                            {
                                                                echo "No category Available"; 
                                                            }
                                                        ?> 
                                                        
                                                    </select>

                                                </div>
                                                    <input type="hidden" name="product_id" value="<?= $data['id']; ?>">
                                                    <div class="col-md-6">
                                                        <label class="mb-0">Name</label>
                                                        <input type="text" required name="name" value="<?= $data['name']; ?>" placeholder="Enter Product Name" class="form-control mb-2">
                                                    </div> " 
                                                    <div class="col-md-6">
                                                        <label class="mb-0">Slug</label>
                                                        <input type="text" required name="slug" value="<?= $data['slug']; ?>" placeholder="Enter Slug" class="form-control mb-2">
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="mb-0">Small Description</label>
                                                        <textarea rows="3" required name="small_description" placeholder="Enter Small Description" class="form-controlmb-2"><?= $data['small_description']; ?></textarea>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="mb-0">Description</label>
                                                        <textarea rows="3" required name="description" placeholder="Enter Description" class="form-control mb-2"><?= $data['description']; ?></textarea>
                                                    </div> 
                                                    <div class="col-md-6">
                                                        <label class="mb-0">Original Price</label>
                                                        <input type="text" required name="original_price" value="<?= $data['original_price']; ?>" placeholder="Enter Original Price" class="form-control mb-2">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="mb-0">Selling Price</label>
                                                        <input type="text" required name="selling_price" value="<?= $data['selling_price']; ?>" placeholder="Enter Selling Price" class="form-control mb-2">
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="mb-0">Upload Image</label>
                                                        <input type="hidden" name="old_image" value="<?= $data['image']; ?>">
                                                        <input type="file"  name="image" class="form-control">
                                                        <label class="mb-0">Current Image</label>
                                                        <img src="../uploads/<?= $data['image']; ?>" alt="Product Image" height="50px" width="50px">
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label class="mb-0">Quantity</label>
                                                            <input type="number" required name="qty" value="<?= $data['status']; ?>" placeholder="Enter Quantity" class="form-control mb-2">
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label class="mb-0">Status</label> <br>
                                                            <input type="checkbox" <?= $data['status'] == '0'?'':'checked' ?> name="status" >
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label class="mb-0">Trending</label> <br>
                                                            <input type="checkbox" <?= $data['trending'] == '0'?'':'checked' ?> name="trending" value="<?= $data['trending']; ?>">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="mb-0">Meta Title</label>
                                                        <input type="text" required name="meta_title" value="<?= $data['meta_title']; ?>" placeholder="Enter Meta Title" class="form-control mb-2"> 
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="mb-0">Meta Description</label>
                                                        <textarea rows="3" required name="meta_desription" value="<?= $data['meta_description']; ?>" placeholder="Enter Meta Description" class="form-control mb-2"></textarea>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="mb-0">Meta Keywords</label>
                                                        <textarea rows="3" required name="meta_keywords" value="<?= $data['meta_keywords']; ?>" placeholder="Enter Meta Keywords" class="form-control mb-2"></textarea>
                                                    </div>
                                                    
                                                    <div class="col-md-12">
                                                        <button  style="background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 5px;" type="submit" class="btn btn primary" name="update_product_btn">Update</button>
                                                    </div>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                         <?php 
                    }
                    else
                    {
                        echo "Product Not Found for Given ID";
                    }  
                   
                }
                 else
                 {
                    echo "ID Missing from URL";
                 }
                 ?>
        </div>
    </div>
</div>

<?php  include('includes/footer.php'); ?>
